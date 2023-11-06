import OpenAIApi from 'openai';

import { cacheSummary } from './LocalStorageManager';
import {
  generateFOTDPrompt,
  generateSummarisePrompt,
  generateTodayHistoryPrompt,
} from './PromptGenerator';

const API_KEY = import.meta.env.VITE_OPENAI_KEY;

const openai = new OpenAIApi({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function streamSummaryResponse(
  userInfo,
  setResponseMsg,
  controller
) {
  setResponseMsg('');
  let currentMsg = '';
  const prompt = await generateSummarisePrompt(userInfo);

  const completion = await openai.chat.completions.create(
    {
      model: 'gpt-3.5-turbo',
      messages: prompt,
      stream: true,
    },
    { signal: controller.signal }
  );

  for await (const chunk of completion) {
    const chunkMsg = chunk.choices[0].delta.content;
    if (chunkMsg) {
      currentMsg += chunkMsg;
      setResponseMsg(currentMsg);
      cacheSummary(currentMsg);
    }
  }
}

async function queryWithPrompt(prompt) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: prompt,
  });

  const response = completion.choices[0].message.content;
  return response;
}

export async function getFactOfTheDay() {
  const fotdPrompt = generateFOTDPrompt();
  return queryWithPrompt(fotdPrompt);
}

export async function getTodayInHistory() {
  const historyTodayPrompt = generateTodayHistoryPrompt();
  return queryWithPrompt(historyTodayPrompt);
}

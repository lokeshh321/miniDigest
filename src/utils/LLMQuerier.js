import OpenAIApi from 'openai';

import { cacheSummary } from './LocalStorageManager';
import generateSummarisePrompt from './PromptGenerator';

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
  const prompt = generateSummarisePrompt(userInfo);
  let currentMsg = '';
  const completion = await openai.chat.completions.create(
    {
      model: 'gpt-3.5-turbo',
      messages: prompt,
      stream: true,
      max_tokens: 200,
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

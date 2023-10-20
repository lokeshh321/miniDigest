import { Card, Typography } from '@mui/material';
import OpenAIApi from 'openai';
import React, { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_OPENAI_KEY;

const openai = new OpenAIApi({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

const placeholder =
  "On 19 October last year, several significant events occurred globally. In the United States, President Donald Trump's administration announced the country's withdrawal from the Intermediate-Range Nuclear Forces (INF) Treaty with Russia to develop new missiles. Meanwhile, protests erupted in Catalonia, Spain, following the Supreme Court's ruling on the imprisonment of independence leaders. Lebanon experienced nationwide demonstrations against corruption, economic challenges, and governmental inefficiencies. In sports, the Rugby World Cup quarterfinals started, with England defeating Australia, and New Zealand overpowering Ireland. Furthermore, NASA unveiled the first all-female spacewalking team, comprised of Jessica Meir and Christina Koch.";

export default function SummarySection() {
  //  WORKING CODE
  const [renderChat, setRender] = useState();
  const [responseMsg, setResponseMsg] = useState('');

  useEffect(() => {
    const prompt = [
      {
        role: 'system',
        content:
          'You will summarise the most important few news and happenings around the world given a date. KEEP the reply to only 100 words. You will write it in a way that is easily understandable, coherent and concise. Do not give point form.',
      },
      {
        role: 'user',
        content: 'Summarise the trending news on 19 October last year.',
      },
    ];

    let currentMsg = '';
    async function streamResponse() {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: prompt,
        stream: true,
        max_tokens: 200,
      });

      for await (const chunk of completion) {
        const chunkMsg = chunk.choices[0].delta.content;
        if (chunkMsg) {
          currentMsg += chunkMsg;
          setResponseMsg(currentMsg);
        }
      }
    }

    // streamResponse(); // UNCOMMENT TO CALL API ENDPOINT
  }, [renderChat]);

  return (
    <Card sx={{ padding: 5, flexBasis: '75%' }}>
      <Typography sx={{ fontSize: '20px', lineHeight: 2.2 }}>
        {placeholder}
        {/* {responseMsg} */}
      </Typography>
    </Card>
  );
}

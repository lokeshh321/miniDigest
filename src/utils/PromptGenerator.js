export default function generateSummarisePrompt(userInfo) {
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
  return prompt;
}

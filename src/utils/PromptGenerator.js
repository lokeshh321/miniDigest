import { fetchArticles } from './ArticleManager';

export async function generateSummarisePrompt(userInfo) {
  try {
    const articles = await fetchArticles(userInfo.preferences, 6);
    const articleJSON = JSON.stringify(articles);
    const userAge = userInfo.age;
    const stylisePrompt = userInfo.stylise_prompt;

    const prompt = [
      {
        role: 'system',
        content: `You will act as a news summariser. You must follow the following style of writing: "${stylisePrompt}".
        If no style is given, write a continuous paragraph in a concise and coherent manner that is easy to understand. 
        Make your summary short and clear, keeping to a maximum of 200 words. Strictly DO NOT write in markdown.
        Do not write in point form unless otherwise specified by writing style.
        Tailor it to a ${userAge} year old user unless otherwise specified by the writing style.
        Summarise the following articles given in JSON format: ${articleJSON}`,
      },
    ];
    console.log(prompt);
    return prompt;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function generateFOTDPrompt() {
  return [
    {
      role: 'system',
      content: `You will generate a random fact about various topics from environment, science, tech etc. Generate fun fact and start the sentence with 'Did you know'.
      Write it in a very concise and short manner keeping to only 1 sentence if possible. Only use 2 sentences if really needed.`,
    },
  ];
}

export function generateTodayHistoryPrompt() {
  return [
    {
      role: 'system',
      content: `You will generate a random fun fact for what happened on a certain day of the year. Today's date is ${new Date()}.
      Write it in a very concise and short manner keeping to only 1 sentence if possible. Only use 2 sentences if really needed.`,
    },
  ];
}

import { fetchArticles } from './ArticleManager';

export default async function generateSummarisePrompt(userInfo) {
  try {
    const articles = await fetchArticles(userInfo.preferences, 6);
    const articleJSON = JSON.stringify(articles);
    const userAge = userInfo.age;
    const stylisePrompt = userInfo.stylise_prompt;

    const prompt = [
      {
        role: 'system',
        content: `You will act as a news summariser and summarise the following articles given in JSON format: ${articleJSON}. 
        Write a continuous paragraph in a concise and coherent manner that is easy to understand. 
        Make your summary short and clear, keeping to a maximum of 200 words. 
        Here is the style of writing you will follow: "${stylisePrompt}".
        Tailor it to a ${userAge} year old user unless otherwise specified by the writing style`,
      },
    ];
    console.log(prompt);
    return prompt;
  } catch (error) {
    console.error(error);
    return [];
  }
}

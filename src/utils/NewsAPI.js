import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWSAPI_KEY;
// const NEWS_API_URL = 'https://newsapi.org/v2/everything';
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

export default async function fetchNewsAPI() {
  axios
    .get(NEWS_API_URL, {
      params: {
        apiKey: API_KEY,
        // q: 'Google',
        category: 'general',
        country: 'sg',
        // sources: 'The Verge, TechCrunch',
        pageSize: 100,
      },
    })
    .then((response) => {
      console.log(response.data);
    });
}

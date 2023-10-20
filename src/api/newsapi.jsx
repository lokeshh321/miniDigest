import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWSAPI_KEY;
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

export default function NewsPage() {
  async function fetchNews() {
    axios
      .get(NEWS_API_URL, {
        params: {
          apiKey: API_KEY,
          category: 'business',
          language: 'en',
          pageSize: 10,
        },
      })
      .then((response) => {
        console.log(response);
      });
  }

  fetchNews();

  return <div>Hello</div>;
}

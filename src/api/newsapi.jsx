import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWSAPI_KEY;

export default function NewsPage() {
  axios
    .get('https://newsapi.org/v2/everything', {
      params: {
        q: 'bitcoin',
        apiKey: API_KEY,
      },
    })
    .then((response) => {
      console.log(response);
    });
  return <div>Hello</div>;
}

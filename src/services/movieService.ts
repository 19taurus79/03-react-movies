import axios from 'axios';
const token = import.meta.env.VITE_TOKEN;
axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
export const fetchMovies = async ({ query }: { query: string }) => {
  const response = await axios.get('', {
    params: {
      query,
    },
  });
  return response.data.results;
};

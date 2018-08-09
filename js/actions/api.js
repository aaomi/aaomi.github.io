import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/'
});

export function updateApiAuthenticationToken(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;

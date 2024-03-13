import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
const GITHUB_TOKEN = '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';
axiosInstance.interceptors.request.use(config => {
  config.headers.Accept = 'application/vnd.github+json';
  config.headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  config.headers['X-GitHub-Api-Version'] = '2022-11-28';

  return config;
});

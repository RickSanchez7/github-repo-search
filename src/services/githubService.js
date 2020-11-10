import axios from 'axios';
import { axiosGetCancelLabel } from '../helpers/axios.helper';

const axiosConfig = {
  baseURL: 'https://api.github.com',
  auth: {
    username: process.env.GITHUB_CLIENT_ID,
    password: process.env.GITHUB_CLIENT_SECRET,
  },
};

function searchRepos(searchText, language) {
  const query = language ? `${searchText}+language:${language}` : searchText;

  if (isServer()) {
    const instance = axios.create(axiosConfig);

    return instance.get(
      `/search/repositories?q=${query}&sort=stars&order=desc`
    );
  }

  return axiosGetCancelLabel(`/api/search?q=${query}&sort=stars&order=desc`);
}

function getRepo(id) {
  const instance = axios.create(axiosConfig);

  return instance.get(`repositories/${id},`);
}

function getProfile(username) {
  const instance = axios.create(axiosConfig);

  return instance.get(`users/${username}`);
}

function isServer() {
  return typeof window === 'undefined';
}

export { searchRepos, getRepo, getProfile };

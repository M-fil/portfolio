import { Octokit } from '@octokit/core';
import { urls, personalData } from '../constants/constants';

const {
  REACT_APP_GITHUB_AUTH_KEY,
} = process.env;

const getAllProjectCollaborators = async (projectName?: string) => {
  const octokit = new Octokit({ auth: REACT_APP_GITHUB_AUTH_KEY });
  const data = await octokit.request(urls.GITHUB_GET_TEAMMATES_QUERY, {
    owner: personalData.GITHUB_LOGIN,
    repo: projectName,
  });

  return data;
};

const getPersonalGithubData = async () => {
  const response = await fetch(urls.PERSONAL_GITHUB_URL);
  const data = await response.json();

  return data;
};

const getDataByURL = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export {
  getAllProjectCollaborators,
  getPersonalGithubData,
  getDataByURL,
};

import { Octokit } from '@octokit/core';
import { urls } from '../constants/constants';

const getAllProjectCollaborators = async (projectName?: string) => {
  const octokit = new Octokit({ auth: '48754dc9ea6e0d361a319d51e55343c7335f45be' });
  const data = await octokit.request('GET /repos/{owner}/{repo}/collaborators', {
    owner: 'M-fil',
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

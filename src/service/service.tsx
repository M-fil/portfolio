import { Octokit } from '@octokit/core';
import { urls } from '../constants/constants';

const getAllProjectCollaborators = async (projectName?: string) => {
  const octokit = new Octokit({ auth: '309d774306aa81b2b3b8b4e89eca5d878bcb8b74' });
  console.log('octokit', octokit);
  const data = await octokit.request('GET /repos/{owner}/{repo}/collaborators', {
    owner: 'M-fil',
    repo: projectName,
  });

  console.log('data', data);

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

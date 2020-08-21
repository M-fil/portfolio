import { urls, personalData, tokens } from '../constants/constants';

const { Octokit } = require('@octokit/rest');

const getAllProjectCollaborators = async (projectName?: string) => {
  const octokit = new Octokit({
    auth: tokens.GITHUB_ACCESS_TOKEN,
  });
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

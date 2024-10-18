export const CACHE_TIME = 1000 * 60 * 60 * 24;
export const API_PATH = import.meta.env.VITE_API;

const userName = import.meta.env.VITE_USER_NAME;

export const API = {
	USER: `${API_PATH}/users/${userName}`,
	REPOSITORIES: `${API_PATH}/users/${userName}/repos`,
	REPOSITORY: (name: string) => `${API_PATH}/repos/${userName}/${name}`,
	REPO_README: (name: string) => `${API_PATH}/repos/${userName}/${name}/readme`
};

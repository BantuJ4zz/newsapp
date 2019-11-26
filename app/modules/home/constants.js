/*
export const NAME='home';

export const RETRIEVING_HEADLINES = 'home/RETRIEVING_HEADLINES';
export const HEADLINES_AVAILABLE = 'home/HEADLINES_AVAILABLE';
export const HEADLINES_ERROR = 'home/HEADLINES_ERROR';

export const API_URL = 'https://newsapi.org/v2/top-headlines?';
export const API_KEY = '2dd073b41fc9497c82ce9337acd17e4d';
*/

export const NAME = 'news';
export const PAGESIZE = 20;

//Redux Action Types
export const HEADLINES_AVAILABLE = `${NAME}/HEADLINES_AVAILABLE`;
export const CATEGORY_HEADLINES_AVAILABLE = `${NAME}/CATEGORY_HEADLINES_AVAILABLE`;

//API URL
export const API_URL = 'https://newsapi.org/v2';
export const API_KEY = '?apiKey=2dd073b41fc9497c82ce9337acd17e4d';
export const API_PARAMS = `&pageSize=${PAGESIZE}`;

//API End Points
export const HEADLINES = `${API_URL}/top-headlines${API_KEY}${API_PARAMS}`;
export const SEARCH = `${API_URL}/everything${API_KEY}${API_PARAMS}&sortBy=relevancy`;

//CATEGORIES
export const CATEGORIES = [ "General", "Health", "Science", "Sports", "Technology"];

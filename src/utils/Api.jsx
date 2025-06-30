import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "https://final-project-api-alpha.vercel.app/api",
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchCategories = () => axios.get(`${BASE_URL}/categories.php`);

export const fetchDefaultMeals = () => axios.get(`${BASE_URL}/search.php?s=`);

export const fetchMealsByCategory = (category) =>
  axios.get(`${BASE_URL}/filter.php?c=${category}`);

export const fetchMealDetail = (id) =>
  axios.get(`${BASE_URL}/lookup.php?i=${id}`);

export const fetchMealsBySearch = (query) =>
  axios.get(`${BASE_URL}/search.php?s=${query}`);

export default api;

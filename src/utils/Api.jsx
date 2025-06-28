import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchCategories = () => axios.get(`${BASE_URL}/categories.php`);

export const fetchDefaultMeals = () => axios.get(`${BASE_URL}/search.php?s=`);

export const fetchMealsByCategory = (category) =>
  axios.get(`${BASE_URL}/filter.php?c=${category}`);

export const fetchMealDetail = (id) =>
  axios.get(`${BASE_URL}/lookup.php?i=${id}`);

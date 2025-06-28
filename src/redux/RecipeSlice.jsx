import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchCategories,
    fetchDefaultMeals,
    fetchMealsByCategory,
    fetchMealDetail,
    fetchMealsBySearch
} from "../utils/Api";

// Thunk actions
export const getCategories = createAsyncThunk("recipe/getCategories", async () => {
    const res = await fetchCategories();
    return res.data.categories;
});

export const getDefaultMeals = createAsyncThunk("recipe/getDefaultMeals", async () => {
    const res = await fetchDefaultMeals();
    return res.data.meals;
});

export const getMealsByCategory = createAsyncThunk(
    "recipe/getMealsByCategory",
    async (category) => {
        const res = await fetchMealsByCategory(category);
        return res.data.meals;
    }
);

export const searchMeals = createAsyncThunk("recipe/searchMeals", async (query) => {
    const res = await fetchMealsBySearch(query);
    return res.data.meals || [];
});

export const getMealDetail = createAsyncThunk("recipe/getMealDetail", async (id) => {
    const res = await fetchMealDetail(id);
    return res.data.meals[0];
});

// Slice
const recipeSlice = createSlice({
    name: "recipe",
    initialState: {
        categories: [],
        meals: [],
        mealDetail: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearMealDetail: (state) => {
            state.mealDetail = null;
        },
        clearMeals: (state) => {
            state.meals = [];
        }

    },
    extraReducers: (builder) => {
        builder
            // Categories
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Default Meals
            .addCase(getDefaultMeals.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDefaultMeals.fulfilled, (state, action) => {
                state.loading = false;
                state.meals = action.payload;
            })
            .addCase(getDefaultMeals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Meals by Category
            .addCase(getMealsByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMealsByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.meals = action.payload;
            })
            .addCase(getMealsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Meal Detail
            .addCase(getMealDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMealDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.mealDetail = action.payload;
            })
            .addCase(getMealDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Search Meals
            .addCase(searchMeals.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchMeals.fulfilled, (state, action) => {
                state.loading = false;
                state.meals = action.payload;
            })
            .addCase(searchMeals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearMealDetail } = recipeSlice.actions;
export default recipeSlice.reducer;

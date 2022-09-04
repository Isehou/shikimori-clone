import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import filterReducer from "./slices/filterSlice";
import animeReducer from "./slices/animeSlice";
import recipesReducer from "./slices/recipesSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
    animes: animeReducer,
    recipes: recipesReducer,
  },
});
export default store;

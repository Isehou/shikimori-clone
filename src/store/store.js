import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import animeReducer from "./slices/animeSlice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    animes: animeReducer,
  },
});
export default store;

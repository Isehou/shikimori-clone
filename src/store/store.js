import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import animeReducer from "./slices/animeSlice";
import mangaReducer from "./slices/mangaSlice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    animes: animeReducer,
    manga: mangaReducer,
  },
});
export default store;

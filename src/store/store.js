import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice.tsx";
import animeReducer from "./slices/animeSlice.tsx";
import mangaReducer from "./slices/mangaSlice.tsx";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    animes: animeReducer,
    manga: mangaReducer,
  },
});
export default store;

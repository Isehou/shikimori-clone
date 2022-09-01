import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
  },
});
export default store;

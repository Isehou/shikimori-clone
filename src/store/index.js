import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import filterReducer from "./slices/filterSlice";

const rootReducer = combineReducers({
  filters: filterReducer,
});

export default configureStore({
  reducer: {
    todos: todoSlice,
  },
});

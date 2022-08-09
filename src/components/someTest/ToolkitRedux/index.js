import { combineReducer, configureStore } from "@reduxjs/toolkit";
import ToolkiSlice from "./ToolkiSlice";

const rootReducer = combineReducer({
  toolkit: ToolkiSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

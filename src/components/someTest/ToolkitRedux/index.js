import { combineReducer, configureStore } from "@reduxjs/toolkit";
import ToolkitSlice from "./ToolkiSlice";

const rootReducer = combineReducer({
  toolkit: ToolkitSlice,
});

export const StoreRedux = configureStore({
  reducer: rootReducer,
});

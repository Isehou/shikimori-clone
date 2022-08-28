import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  filters: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSucess(state, action) {
      state.loading = false;
      state.filters = action.payload;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
export const {} = filterSlice.actions;
export default filterSlice.reducer;

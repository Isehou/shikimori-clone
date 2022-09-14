import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasErrors: false,
  filter: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(filterFetch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(filterFetch.fulfilled, (state, { payload }) => {
      state.filter = payload;
      console.log(payload);
      state.loading = false;
      state.hasErrors = false;
    });
    builder.addCase(filterFetch.rejected, (state) => {
      state.loading = false;
      state.hasErrors = true;
    });
  },
});

export const filterSelector = (state) => state.filter;
export default filterSlice.reducer;

// const filterFetch = createAsyncThunk(
//   "filter/filterFetch",
//   (__, rejectWithValue) => {
//     return fetch("https://shikimori.one/api/genres").then((res) => res.json());
//   }
// );

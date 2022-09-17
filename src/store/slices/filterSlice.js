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
    builder.addCase(fetchFilters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFilters.fulfilled, (state, { payload }) => {
      state.filter = payload;
      console.log(payload);
      state.loading = false;
      state.hasErrors = false;
    });
    builder.addCase(fetchFilters.rejected, (state) => {
      state.loading = false;
      state.hasErrors = true;
    });
  },
});

export const filterSelector = (state) => state.filter;
export default filterSlice.reducer;

export const fetchFilters = createAsyncThunk(
  "filter/filterFetch",
  ({ setItemsFromData }, rejectWithValue) => {
    return fetch("https://shikimori.one/api/genres").then(
      (res) => res.json()
      // .then((res) => setItemsFromData(res.filter((e) => e.kind === "anime")))
    );
  }
);

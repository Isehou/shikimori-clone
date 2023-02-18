import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type initialStateType = {
  loading: boolean;
  hasErrors: boolean;
  anime: Array<string>;
  manga: Array<string>;
};

export type paramsType = {
  page: any;
  filter: any;
  sortType: any;
};

const initialState: initialStateType = {
  loading: false,
  hasErrors: false,
  anime: [],
  manga: [],
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
      const obj = {
        anime: [],
        manga: [],
      };
      payload.forEach((e) => {
        obj[e.kind].push(e);
      });
      state.anime = obj.anime;
      state.manga = obj.manga;
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
  (__, rejectWithValue) => {
    return fetch("https://shikimori.one/api/genres").then((res) => res.json());
  }
);

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  loading: boolean;
  hasErrors: boolean;
  animes: Array<string>;
};

const initialState: initialStateType = {
  loading: false,
  hasErrors: false,
  animes: [],
};

const animeSlice = createSlice({
  name: "animes",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchingAnimes.fulfilled, (state, { payload }) => {
        state.animes = payload;
        // console.log(payload);
        state.loading = false;
        state.hasErrors = false;
      })
      .addCase(fetchingAnimes.rejected, (state) => {
        state.loading = false;
        state.hasErrors = true;
      })
      .addCase(fetchingAnimes.pending, (state) => {
        state.loading = true;
      });
  },
});

export default animeSlice.reducer;
export const animeSelector = (state) => state.animes;

export const fetchingAnimes = createAsyncThunk(
  "animes/fetchingAnimes",
  ({ page, filter, sortType }: any, { rejectWithValue }) => {
    return fetch(
      `https://shikimori.one/api/animes?&order=popularity&limit=30&page=${page}&genre=${filter.join()}&order=${sortType}`
    ).then((res) => res.json());
  }
);

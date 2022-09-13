import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
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
      .addCase(fetchAnimes.fulfilled, (state, { payload }) => {
        state.animes = payload;
        console.log(payload);
        state.loading = false;
        state.hasErrors = false;
      })
      .addCase(fetchAnimes.rejected, (state) => {
        state.loading = false;
        state.hasErrors = true;
      })
      .addCase(fetchAnimes.pending, (state) => {
        state.loading = true;
      });
  },
});

export default animeSlice.reducer;
export const animeSelector = (state) => state.animes;

export const fetchAnimes = createAsyncThunk(
  "animes/fetchAnimes",
  ({ page, filter, sortType }, { rejectWithValue }) => {
    return fetch(
      `https://shikimori.one/api/animes?&limit=30&page=${page}&genre=${filter.join()}&order=${sortType}`
    ).then((res) => res.json());
  }
);

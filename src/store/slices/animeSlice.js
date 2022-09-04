import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasErrors: false,
  animes: [],
};

const animeSlice = createSlice({
  name: "animes",
  initialState: initialState,
  reducers: {
    getFetchingAnime: (state) => {
      state.loading = true;
    },
    getFetchAnimeSuccess: (state, { payload }) => {
      state.recipes = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getFetchAnimeFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
  // extraReducers: {
  //   [fetchAnimes.pending]: (state) => {
  //     state.status = "loading";
  //     state.error = null;
  //   },
  //   [fetchAnimes.fulfilled]: (state, action) => {
  //     state.status = "resolved";
  //     state.animes = action.payload;
  //   },
  //   [fetchAnimes.rejected]: (state, action) => {
  //     state.status = "rejected";
  //     state.error = action.error.message;
  //   },
  // },
});

export const { getFetchingAnime, getFetchAnimeSuccess, getFetchAnimeFailure } =
  animeSlice.actions;
export default animeSlice.reducer;

export const animeSelector = (state) => state.animes;

export const fetchAnimes = createAsyncThunk(
  "animes/fetchAnimes",
  async function () {
    const response = await fetch(`https://shikimori.one/api/animes?&limit=10`);
    if (!response.ok) {
      throw new Error("Server error");
    }
    const data = await response.json();
    return data;
  }
);

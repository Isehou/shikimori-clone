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
      state.animes = payload;
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

export function fetchAnimes() {
  return async (dispatch) => {
    dispatch(getFetchingAnime());

    try {
      const response = await fetch(
        "https://shikimori.one/api/animes?&limit=30"
      );
      const data = await response.json();

      dispatch(getFetchAnimeSuccess(data));
    } catch (error) {
      dispatch(getFetchAnimeFailure());
    }
  };
}

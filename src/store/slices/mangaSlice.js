import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasErrors: false,
  manga: [],
};

const mangaSlice = createSlice({
  name: "manga",
  initialState: initialState,
  reducers: {
    getFetchingManga: (state) => {
      state.loading = true;
    },
    getFetchMangaSuccess: (state, { payload }) => {
      state.manga = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getFetchMangaFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getFetchingManga, getFetchMangaSuccess, getFetchMangaFailure } =
  mangaSlice.actions;
export default mangaSlice.reducer;
export const mangaSelector = (state) => state.manga;

export function fetchMangas() {
  return async (dispatch) => {
    dispatch(getFetchingManga());

    try {
      const response = await fetch(
        "https://shikimori.one/api/mangas?&limit=10&order=popularity"
      );
      const data = await response.json();
      console.log(data);

      dispatch(getFetchMangaSuccess(data));
    } catch (error) {
      dispatch(getFetchMangaFailure());
    }
  };
}

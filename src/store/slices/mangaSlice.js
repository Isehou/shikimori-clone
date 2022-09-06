import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasErrors: false,
  mangas: [],
};

const mangaSlice = createSlice({
  name: "mangas",
  initialState: initialState,
  reducers: {
    getFetchingManga: (state) => {
      state.loading = true;
    },
    getFetchMangaSuccess: (state, { payload }) => {
      state.mangas = payload;
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

export const mangaSelector = (state) => state.mangas;

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

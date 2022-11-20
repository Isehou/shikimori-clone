import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasErrors: false,
  manga: [],
};

const mangaSlice = createSlice({
  name: "manga",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchManga.fulfilled, (state, { payload }) => {
        state.manga = payload;
        // console.log(payload);
        state.loading = false;
        state.hasErrors = false;
      })
      .addCase(fetchManga.rejected, (state) => {
        state.loading = false;
        state.hasErrors = true;
      })
      .addCase(fetchManga.pending, (state) => {
        state.loading = true;
      });
  },
});

export default mangaSlice.reducer;
export const mangaSelector = (state) => state.manga;

export const fetchManga = createAsyncThunk(
  "manga/fetchManga",
  ({ page, filter, sortType }, { rejectWithValue }) => {
    return fetch(
      `https://shikimori.one/api/mangas?&limit=40&page=${page}&genre=${filter.join()}&order=${sortType}`
    ).then((res) => res.json());
  }
);

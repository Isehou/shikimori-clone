import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsFromData: 0,
  genres: {
    name: "",
    genreProperty: "",
  },
};

const filterFetch = createAsyncThunk(
  "filterFetch",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("https://shikimori.one/api/genres");
    } catch (error) {}
  }
);

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    itemsFromData(state, action) {
      console.log(action);
    },
    fetchRequest(state, action) {},
    fetchSucess(state, action) {},
    fetchError(state, action) {},
  },
});

export const { itemsFromData } = filterSlice.actions;
export default filterSlice.reducer;

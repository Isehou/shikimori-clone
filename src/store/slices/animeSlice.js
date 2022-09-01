import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animes: "",
};

const animeSlice = createSlice({
  name: "anime",
  initialState: initialState,
  reducers: {},
});

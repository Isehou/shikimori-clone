import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "По популярности",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setCategoryId(state, action) {},
  },
});
export const { setCategoryId } = filterSlice.actions;
export default filterSlice.reducer;

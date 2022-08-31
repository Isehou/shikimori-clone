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
    itemsFromData(state, action) {
      console.log(action);
    },
  },
});
export const { itemsFromData } = filterSlice.actions;
export default filterSlice.reducer;

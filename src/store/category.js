import { createSlice } from "@reduxjs/toolkit";

const initialCategoryState = {
  category: null,
};

const categorySlice = createSlice({
  name: "categorySelect",
  initialState: initialCategoryState,
  reducers: {
    selectCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;

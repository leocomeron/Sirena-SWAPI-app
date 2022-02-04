import { createSlice } from "@reduxjs/toolkit";

const initialCharacterState = {
  character: null,
};

const characterSlice = createSlice({
  name: "characterSelect",
  initialState: initialCharacterState,
  reducers: {
    selectCharacter(state, action) {
      state.character = action.payload;
    },
  },
});

export const characterActions = characterSlice.actions;

export default characterSlice.reducer;

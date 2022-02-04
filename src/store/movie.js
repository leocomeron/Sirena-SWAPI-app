import { createSlice } from "@reduxjs/toolkit";

const initialMovieState = {
  movie: null,
};

const movieSlice = createSlice({
  name: "movieSelect",
  initialState: initialMovieState,
  reducers: {
    selectMovie(state, action) {
      state.movie = action.payload;
    },
    resetMovie(state, action) {
      state.movie = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;

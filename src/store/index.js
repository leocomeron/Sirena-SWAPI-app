import { configureStore } from "@reduxjs/toolkit";

import characterReducer from "./character";
import categoryReducer from "./category";
import movieReducer from "./movie";

const store = configureStore({
  reducer: {
    character: characterReducer,
    category: categoryReducer,
    movie: movieReducer,
  },
});

export default store;

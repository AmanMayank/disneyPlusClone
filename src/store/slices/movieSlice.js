import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
  },
  reducers: {
    setMovies(state, action) {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const moviesReducer = movieSlice.reducer;

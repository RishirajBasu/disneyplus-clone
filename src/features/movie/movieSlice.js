import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  recommended: null,
  newDisneyPlus: null,
  originals: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommended = action.payload.recommended;
      state.newDisneyPlus = action.payload.newDisneyPlus;
      state.originals = action.payload.originals;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const selectRecommended = (state) => state.movie.recommended;
export const selectNewDisneyPlus = (state) => state.movie.newDisneyPlus;
export const selectOriginals = (state) => state.movie.originals;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;

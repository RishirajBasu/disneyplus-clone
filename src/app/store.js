import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import movieReducer from "../features/movie/movieSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  }, // TODO: Add reducers here.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

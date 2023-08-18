import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
export default configureStore({
  reducer: {
    user: userReducer,
  }, // TODO: Add reducers here.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

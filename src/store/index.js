import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/userSlice";
import { moviesReducer } from "./slices/movieSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    movie: moviesReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export { store };
export * from "./slices/userSlice";
export * from "./slices/movieSlice";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import { postsApiSLice } from "./posts/postsApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postsApiSLice.reducerPath]: postsApiSLice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postsApiSLice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

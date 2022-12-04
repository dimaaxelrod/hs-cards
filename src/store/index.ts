import { configureStore } from "@reduxjs/toolkit";
import { hsApi } from "./hearthstone/hs.api";
import { hsReducer } from "./hearthstone/hs.slice";

export const store = configureStore({
  reducer: { [hsApi.reducerPath]: hsApi.reducer, hs: hsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

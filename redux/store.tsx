import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import logger from  'redux-logger'
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { api } from "./slices/slices";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

setupListeners(store.dispatch);

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import registerationReducer from "./features/registerationSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authApi from "./services/authApi";
import productsApi from "./services/productsApi";
import ordersApi from "./services/ordersApi";
import regionApi from "./services/regionApi";

export const store = configureStore({
  reducer: {
    authReducer,
    registerationReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [regionApi.reducerPath]: regionApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware,
      regionApi.middleware,
      productsApi.middleware,
      ordersApi.middleware
    ),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

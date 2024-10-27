import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ProductsReducer, ProductsSlice } from "./slice/product";

export const store = configureStore({
  reducer: combineReducers({
    products: ProductsReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

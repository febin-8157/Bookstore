import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import booksApi from './books/booksApi'
import orderApi from './books/orderApi'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware,orderApi.middleware),
})
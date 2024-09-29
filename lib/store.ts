import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/lib/features/counter/counterSlice';
import productReducer from '@/lib/features/product/productSlice';

export const makeStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      product: productReducer,
    },
    preloadedState,
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
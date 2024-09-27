// ../lib/features/product/productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  name: string;
}

interface ProductState {
  name: string;
}

const initialState: ProductState = {
  name: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    initializeProduct(state, action: PayloadAction<Product>) {
      state.name = action.payload.name;
    },
  },
});

export const { initializeProduct, setProductName } = productSlice.actions;
export default productSlice.reducer;
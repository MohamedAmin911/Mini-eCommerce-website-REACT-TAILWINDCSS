import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const incomingProduct = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === incomingProduct.id,
      );

      if (existingProduct) {
        existingProduct.quantity += incomingProduct.quantity;
        return;
      }

      state.items.push(incomingProduct);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);

      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItems: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    deleteCartItem: (state, action) => {
      const id = action.payload.id;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
});

export const { addCartItems,deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;

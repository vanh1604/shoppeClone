import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  addPayment: false,
  cartPayment: [],
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
    updateQuantityItems: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      state.cartPayment = state.cartPayment.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    },

    deleteCartItem: (state, action) => {
      const id = action.payload.id;
      state.cart = state.cart.filter((item) => item.id !== id);
      state.cartPayment = state.cartPayment.filter((item) => item.id !== id);
    },
    updateAddPayment: (state, action) => {
      state.addPayment = action.payload;
    },
    totalPrice: (state, action) => {
      if (state.addPayment) {
        state.cartPayment.push(action.payload);
      } else {
        state.cartPayment = state.cartPayment.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const {
  addCartItems,
  deleteCartItem,
  updateAddPayment,
  updateQuantityItems,
  totalPrice,
} = cartSlice.actions;
export default cartSlice.reducer;

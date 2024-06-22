import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers,
  reducers: {
    addToCart(state, action) {},
    removeFromCart(state, action) {},
  },
});

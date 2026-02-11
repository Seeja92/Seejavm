import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  tempItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state:any, action) {
      const existingItem = state.items.find(
        (item:any) => item.id === action.payload.id
      );
      

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.tempItems = [...state.items];
      state.totalPrice = state.items.reduce(
        (sum:any, item:any) => sum + item.price * item.quantity,
        0
      );
    },
    updateTempQuantity(state:any, action) {
      const tempItem = state.tempItems.find(
        (item:any) => item.id === action.payload.id
      );
      if (tempItem) {
        tempItem.quantity = action.payload.quantity;
      }
    },
    applyTempUpdate(state:any, action) {
      const tempItem = state.tempItems.find(
        (item:any) => item.id === action.payload
      );
      const cartItem = state.items.find((item:any) => item.id === action.payload);
      if (cartItem && tempItem) {
        cartItem.quantity = tempItem.quantity;
      }
      state.totalPrice = state.items.reduce(
        (sum:any, item:any) => sum + item.price * item.quantity,
        0
      );
    },
    removeFromCart(state:any, action) {
      state.items = state.items.filter((item:any) => item.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (sum:any, item:any) => sum + item.price * item.quantity,
        0
      );
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  updateTempQuantity,
  applyTempUpdate,
} = cartSlice.actions;
export default cartSlice.reducer;

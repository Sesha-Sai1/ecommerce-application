import { createSlice } from "@reduxjs/toolkit";

const AddToCartSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    AddCart: (state, action) => {
      return [...state, { ...action.payload }];
    },
    RemoveItem: (state, action) => {
      console.log(action.payload);
      return state.filter((prod) => {
        return prod.id !== action.payload.id;
      });
    },

    incrementQuntity: (state, action) => {
      const updatedCart = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      console.log(updatedCart);
      return updatedCart;
    },
    decrementQuntity: (state, action) => {
      const updatedCart = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return updatedCart;
    },
  },
});

export const { AddCart, RemoveItem, incrementQuntity, decrementQuntity } =
  AddToCartSlice.actions;

export default AddToCartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    AddToWishList: (state, action) => {
      return [...state, { ...action.payload }];
    },
    RemoveWishList: (state, action) => {
      console.log(action.payload);
      return state.filter((prod) => {
        return prod.id !== action.payload.id;
      });
    },

    // incrementQuntity: (state, action) => {
    //   const updatedCart = state.map((item) =>
    //     item.id === action.payload.id
    //       ? { ...item, quantity: item.quantity + 1 }
    //       : item
    //   );
    //   console.log(updatedCart);
    //   return updatedCart;
    // },
    // decrementQuntity: (state, action) => {
    //   const updatedCart = state.map((item) =>
    //     item.id === action.payload.id
    //       ? { ...item, quantity: item.quantity - 1 }
    //       : item
    //   );
    //   return updatedCart;
    // },
  },
});

export const { AddToWishList, RemoveWishList } = WishListSlice.actions;

export default WishListSlice.reducer;

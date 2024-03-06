import { configureStore } from "@reduxjs/toolkit";
import AddToCartSlice from "./AddToCartSlice";
import AuthenticationSlice from "./AuthenticationSlice";
import WishListSlice from "./WishListSlice";

const Store = configureStore({
  reducer: {
    product: AddToCartSlice,
    user: AuthenticationSlice,
    wish: WishListSlice,
  },
});

export default Store;

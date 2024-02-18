import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slice/cartSlice";

export const Store=configureStore({
    reducer:{
        allcart: cartReducer,
    }
})

export default Store;
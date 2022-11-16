import { combineReducers } from "@reduxjs/toolkit";
import productSlice  from "./slice/productsSlice";
import authSlice  from "./slice/authSlice";

const rootReducer =combineReducers({
    auth : authSlice,
    product : productSlice
})

export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "entities/auth/model/slice";
import { cartSlice } from "entities/cart";
import { baseApi } from 'shared/api/baseApi';

export const rootReducer = combineReducers({
    [cartSlice.name]: cartSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    
})
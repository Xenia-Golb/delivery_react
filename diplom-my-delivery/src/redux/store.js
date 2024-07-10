import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart.slice';
import dishSlice from './slices/dish.slice';


export const store = configureStore({
    reducer: {
        cartItem: cartSlice,
        dishes: dishSlice
    }
});




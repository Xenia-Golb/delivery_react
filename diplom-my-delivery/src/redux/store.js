import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart.slice';
import dishSlice from './slices/dish.slice';
import formSlice from './slices/form.slice';


export const store = configureStore({
    reducer: {
        cartItem: cartSlice,
        dishes: dishSlice,
        form: formSlice
    }
});




import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../reducers/cart.slice';


export const store = configureStore({
    reducer: {
        cartItem: cartSlice
    }
});




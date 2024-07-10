import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart.slice';
import dishSlice from './slices/dish.slice';
import formSlice from './slices/form.slice';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('orders');
        if (serializedState === null) {
            return undefined;
        }
        return { order: JSON.parse(serializedState) };
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state.order);
        localStorage.setItem('orders', serializedState);
    } catch (err) {
        console.log(err.message);
    }
};

const preloadedState = loadState();
export const store = configureStore({
    reducer: {
        cartItem: cartSlice,
        dishes: dishSlice,
        form: formSlice
    },
    preloadedState
});

store.subscribe(() => {
    saveState(store.getState());
});

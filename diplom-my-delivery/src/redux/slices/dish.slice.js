import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../data/products';

const initialState = {
    dishes: products,
    searchQuery: ''
};

const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
});

export const { setSearchQuery } = dishesSlice.actions;
export default dishesSlice.reducer;
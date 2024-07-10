import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../data/products';

const initialState = {
    dishes: products,
    searchQuery: '',
    sortBy: ''
};

const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        }
    }
});

export const { setSearchQuery, setSortBy } = dishesSlice.actions;
export default dishesSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: []
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        removeOrder: (state, action) => {
            state.orders = state.orders.filter(order => order.id !== action.payload);
        },
        clearOrders: (state) => {
            state.orders = [];
        },
        loadOrders: (state, action) => {
            state.orders = action.payload;
        }
    }
});

export const { addOrder, removeOrder, clearOrders, loadOrders } = orderSlice.actions;
export default orderSlice.reducer;
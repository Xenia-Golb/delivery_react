import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cartItem',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            // const existed = state.items.find(i => i.id === action.payload);
            // if (!existed) {
            //     state.items.push(
            //         { id: action.payload, count: 1 });
            //     return;
            // }
            // state.items.map(i => {
            //     if (i.id === action.payload) {
            //         i.count += 1;
            //     }
            //     return i;
            // });
        }
    }
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cartItem',
    initialState: {
        items: []
    },
    reducers: {
        clean: (state) => {
            state.items = [];
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        removeItem: (state, action) => {
            const existed = state.items.find(i => i.id === action.payload);
            if (!existed) {
                return;
            }
            if (existed.count === 1) {
                state.items = state.items.filter(i => i.id !== action.payload);
            } else {
                state.items.map(i => {
                    if (i.id === action.payload) {
                        i.count -= 1;
                    }
                    return i;
                });
                return;
            }

        },
        addItem: (state, action) => {
            const existed = state.items.find(i => i.id === action.payload);
            if (!existed) {
                state.items.push({ id: action.payload, count: 1 });
                return;
            }
            state.items.map(i => {
                if (i.id === action.payload) {
                    i.count += 1;
                }
                return i;
            });
        }
    }

}
);

export const { addItem, removeItem, deleteItem, clean } = cartSlice.actions;
export default cartSlice.reducer;
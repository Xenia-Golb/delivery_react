import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: ''
    },
    errors: {}
};

const validate = (field, value) => {
    switch (field) {
        case 'username':
            return value.length < 3 ? 'Username must be at least 3 characters long' : '';
        case 'email':
            return !/\S+@\S+\.\S+/.test(value) ? 'Email is invalid' : '';
        case 'password':
            return value.length < 6 ? 'Password must be at least 6 characters long' : '';
        default:
            return '';
    }
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateField: (state, action) => {
            const { field, value } = action.payload;
            state.formData[field] = value;
            state.errors[field] = validate(field, value);
        },
        setErrors: (state) => {
            const { formData } = state;
            const errors = {};
            Object.keys(formData).forEach((field) => {
                const error = validate(field, formData[field]);
                if (error) errors[field] = error;
            });
            state.errors = errors;
        }
    }
});

export const { updateField, setErrors } = formSlice.actions;
export default formSlice.reducer;
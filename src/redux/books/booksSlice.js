import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: [] }

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        removeBook: (state, action) => {
            state.value = state.value.filter((book) => book.id !== action.payload);
        },
    },
})

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
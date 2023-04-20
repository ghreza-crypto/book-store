import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value:
        [
          {
            itemId: 'item1',
            title: 'The Great Gatsby',
            author: 'John Smith',
            category: 'Fiction',
          },
          {
            itemId: 'item2',
            title: 'Anna Karenina',
            author: 'Leo Tolstoy',
            category: 'Fiction',
          },
          {
            itemId: 'item3',
            title: 'The Selfish Gene',
            author: 'Richard Dawkins',
            category: 'Nonfiction',
          },
        ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeBook: (state, action) => {
      state.value = state.value.filter((book) => book.itemId !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

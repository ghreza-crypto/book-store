import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.value = 'Under construction';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;

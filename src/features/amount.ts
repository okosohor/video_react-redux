import  { PayloadAction, createSlice } from '@reduxjs/toolkit';

const amountSlice = createSlice({
  name: 'amount',
  initialState: 0,
  reducers: {
    add: (value, actions: PayloadAction<number>) => value + actions.payload,
    take: (value, actions: PayloadAction<number>) => value - actions.payload,
    clear: () => 0,
  }
})

export default amountSlice.reducer;
export const { actions } = amountSlice;

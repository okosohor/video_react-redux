import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// type AddAction = { type: 'goods/ADD', payload: string }
// type TakeAction = { type: 'goods/TAKE', payload: string }
// type ClearAction = { type: 'goods/CLEAR' }

// type Action = AddAction | TakeAction | ClearAction

// const add = (value: string): AddAction => ({ type: 'goods/ADD', payload: value })
// const take = (value: string): TakeAction => ({ type: 'goods/TAKE', payload: value })
// const clear = (): ClearAction => ({type: 'goods/CLEAR'});

// export const actions = { add, clear, take }

const initialState: string[] = [];

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    add: (value, actions: PayloadAction<string>) => {value.push(actions.payload)},
    take:(value, actions: PayloadAction<string>) => (value.filter(elem => elem!== actions.payload)),
    clear: () => [],
  }
  }
);

export const { actions } = goodsSlice;
export default goodsSlice.reducer;

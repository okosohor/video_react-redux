import  { createSlice } from '@reduxjs/toolkit';

type Position = {
  x: number,
  y: number
}
const startPosition: Position = { x: 0, y: 0 };
const positionSlice = createSlice({
  name: 'position',
  initialState: startPosition,
  reducers: {
    moveUp: position => {position.y  -= 1},
    moveDown: position => {position.y  += 1},
    moveRight: position => {position.x  += 1},
    moveLeft: position => {position.x  -= 1},
  }
 })


export default positionSlice.reducer;
export const { actions } = positionSlice
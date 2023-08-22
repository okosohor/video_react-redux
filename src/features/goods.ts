type AddAction = { type: 'goods/ADD', payload: string }
type TakeAction = { type: 'goods/TAKE', payload: string }
type ClearAction = { type: 'goods/CLEAR' }

type Action = AddAction | TakeAction | ClearAction

const add = (value: string): AddAction => ({ type: 'goods/ADD', payload: value })
const take = (value: string): TakeAction => ({ type: 'goods/TAKE', payload: value })
const clear = (): ClearAction => ({type: 'goods/CLEAR'});

export const actions = { add, clear, take }

const goodsReducer = (goods: string[] = [], action: Action) => {
  switch(action.type) {
    case 'goods/ADD':
      return [...goods, action.payload]

    case 'goods/TAKE':
    return goods.filter(good => good !== action.payload);

    case 'goods/CLEAR':
      return [];

    default:
      return goods;
  }

};

export default goodsReducer;

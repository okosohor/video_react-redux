type MoveLeftAction = { type: 'position/MOVE_LEFT'};
type MoveRightAction = { type: 'position/MOVE_RIGHT'};
type MoveUpAction = { type: 'position/MOVE_UP'};
type MoveDownAction = { type: 'position/MOVE_DOWN'};

type Action = MoveDownAction |
MoveUpAction |
MoveLeftAction |
MoveRightAction

const moveUp = (): Action => ({ type: 'position/MOVE_UP'});
const moveDown = (): Action => ({ type: 'position/MOVE_DOWN'});
const moveRight = (): Action => ({ type: 'position/MOVE_RIGHT'});
const moveLeft = (): Action => ({ type: 'position/MOVE_LEFT'})

type Position = {
  x: number,
  y: number
}
const startPosition = { x: 0, y: 0 };

const positionReducer = (position: Position = startPosition, action: Action): Position => {
  switch(action.type) {
    case 'position/MOVE_UP':
      return { ...position, y: position.y -1}
    case 'position/MOVE_DOWN':
      return { ...position, y: position.y +1}
    case 'position/MOVE_RIGHT':
      return { ...position, x: position.x +1}
    case 'position/MOVE_LEFT':
      return { ...position, x: position.x -1}

    default:
    return position;
  }
};

export default positionReducer;
export const actions =  { moveDown, moveLeft, moveRight, moveUp }
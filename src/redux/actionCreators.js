export const MOVE_CAR = 'MOVE_CAR';

export const moveCar = (car, side) => ({
  type: MOVE_CAR,
  car,
  side,
});

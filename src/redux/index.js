import { createStore } from 'redux';
import { MOVE_CAR } from './actionCreators';

const initialState = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_CAR:
      return { ...state, cars: { ...state.cars, [action.car]: action.side } };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

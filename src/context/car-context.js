import { createContext } from 'react';

const initialState = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};

const CarContext = createContext(initialState);

export default CarContext;

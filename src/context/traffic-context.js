import { createContext } from 'react';

const initialState = {
  signal: { color: 'red' },
  changeSignal: () => {},
}

const TrafficContext = createContext(initialState);

export default TrafficContext;

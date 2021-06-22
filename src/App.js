import React from 'react';
import './App.css';
import GoCars from './GoCars';
import CarProvider from './context/CarProvider';

function App() {
  return (
    <CarProvider>
      <GoCars />
    </CarProvider>
  );
}

export default App;

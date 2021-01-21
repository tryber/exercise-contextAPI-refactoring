import React, { useState } from 'react';
import { carBlue, carRed, carYellow } from './images';
import contextLeftCars from './contextLeftCar';
import Car from './Car';

export default function Cars() {
  const initialState = { red: false, blue: false, yellow: false };
  const [cars, setCars] = useState(initialState);
  function switchCar({ target: { id }}) {
    setCars(Object.assign({}, cars, { [id]: !cars[id] } ))
  }

  return (
    <contextLeftCars.Provider value={ { switchCar, cars } } >
      <Car alt="red car" img={ carRed } />
      <Car alt="blue car" img={ carBlue } />
      <Car alt="yellow car" img={ carYellow } />
    </contextLeftCars.Provider>
  );
}

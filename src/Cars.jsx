// src/Cars.jsx

import React, { useContext } from 'react';
import AppContext from './context/AppContext';
import carRed from './images/carRed.jpeg';
import carBlue from './images/carBlue.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars() {
  const { cars, setCars } = useContext(AppContext);

  return (
    <div>
      <div>
        <img
          className={cars.red ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => setCars({...cars, red: !cars.red })}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={cars.blue ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => setCars({...cars, blue: !cars.blue })}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={cars.yellow ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => setCars({...cars, yellow: !cars.yellow })}
          type="button"
        >
          Move
        </button>
      </div>
    </div>
  );
}

export default Cars;
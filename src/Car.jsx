import React from 'react';
import contextLeftCars from './contextLeftCar';

export default function car({ alt, img }) {
  const id = alt.replace(' car', '');
  return (
    <contextLeftCars.Consumer>
      { ({ switchCar, cars }) =>
          (
            <div>
              <img
                className={cars[id] ? 'car-right' : 'car-left'}
                src={img}
                alt={alt}
              />
              <button
                onClick={switchCar}
                id={id}
                type="button"
              >
                Move
              </button>
            </div>
          )
      }
    </contextLeftCars.Consumer>
  );
}
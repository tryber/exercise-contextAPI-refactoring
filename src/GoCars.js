import React, { Component } from 'react';
import CarContext from './context/CarContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

class GoCars extends Component {
    render() {
    const { redCar, blueCar, yellowCar, getClick } = this.context;
    console.log(redCar);
    return (
      <div>
        <div>
          <img
            className={redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => getClick('red', redCar)}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={blueCar ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => getClick('blue', blueCar)}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={yellowCar ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => getClick('yellow', yellowCar)}
            type="button"
          >
            Move
          </button>
       </div>
      </div>
    );
  }
}

GoCars.contextType = CarContext;

export default GoCars;
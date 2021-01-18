import React, { Component } from 'react';
import { carBlue, carRed, carYellow } from '../images';
import { contextLeftCars } from '../contexts';
import { Car } from '../components';

export default class Cars extends Component {
  constructor() {
    super();
    this.state={
      cars: { red: false, blue: false, yellow: false },
    }
    this.switchCar = this.switchCar.bind(this);
  }

  switchCar({ target: { id }}) {
    this.setState(({ cars }) => {
      return ({ cars: { [id]: !cars[id] }, })
    })
  }

  render() {
    const LeftCars = {
      switchCar: this.switchCar,
      cars: this.state.cars,
    }
    return (
      <contextLeftCars.Provider value={ LeftCars } >
        <Car alt="red car" img={ carRed } />
        <Car alt="blue car" img={ carBlue } />
        <Car alt="yellow car" img={ carYellow } />
      </contextLeftCars.Provider>
    );
  }
}

import React, { Component } from 'react';
import { carBlue, carRed, carYellow } from './images';
import contextLeftCars from './contextLeftCar';
import Car from './Car';

export default class Cars extends Component {
  constructor() {
    super();
    this.state={
      cars: { red: false, blue: false, yellow: false },
    }
    this.switchCar = this.switchCar.bind(this);
  }

<<<<<<< HEAD
function Cars({ redCar, blueCar, yellowCar, moveCar }) {
  return (
    <div>
      <div>
        <img
          className={redCar ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => moveCar('red', !redCar)}
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
          onClick={() => moveCar('blue', !blueCar)}
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
          onClick={() => moveCar('yellow', !yellowCar)}
          type="button"
        >
          Move
        </button>
      </div>
    </div>
  );
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  redCar: state.carReducer.cars.red,
  blueCar: state.carReducer.cars.blue,
  yellowCar: state.carReducer.cars.yellow});

const mapDispatchToProps = { moveCar };

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
=======
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
>>>>>>> exercise-one

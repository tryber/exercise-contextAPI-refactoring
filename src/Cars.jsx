// src/Cars.jsx

import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import CarContext from './context/car-context';

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        red: false,
        blue: false,
        yellow: false,
    };
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({[car]: side})
  }

  render() {
    return (
      <CarContext.Provider value={{...this.state, moveCar: this.moveCar}}>
      <CarContext.Consumer>
        {({ red: redCar, blue: blueCar, yellow: yellowCar, moveCar }) => (
          <div>
            <div>
              <img
                className={redCar ? 'car-right' : 'car-left'}
                src={carRed}
                alt="red car"
              />
              <button onClick={() => moveCar('red', !redCar)} type="button">
                Move
              </button>
            </div>
            <div>
              <img
                className={blueCar ? 'car-right' : 'car-left'}
                src={carBlue}
                alt="blue car"
              />
              <button onClick={() => moveCar('blue', !blueCar)} type="button">
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
        )}
      </CarContext.Consumer>
      </CarContext.Provider>
    );
  }
}

// Cars.propTypes = {
//   moveCar: PropTypes.func.isRequired,
//   blueCar: PropTypes.bool.isRequired,
//   redCar: PropTypes.bool.isRequired,
//   yellowCar: PropTypes.bool.isRequired,
// };

// const mapStateToProps = (state) => ({
//   redCar: state.carReducer.cars.red,
//   blueCar: state.carReducer.cars.blue,
//   yellowCar: state.carReducer.cars.yellow,
// });

// const mapDispatchToProps = { moveCar };

export default Cars;

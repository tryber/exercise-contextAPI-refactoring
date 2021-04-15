import React from 'react';
import TrafficSignal from './TrafficSignal';
import MyContext from './MyContext';
import red from './images/redSignal.jpeg';
import yellow from './images/yellowSignal.jpeg';
import green from './images/greenSignal.jpeg';
import './App.css';
import Cars from './Cars';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      },
    }
    this.handleCars = this.handleCars.bind(this);
    this.handleTrafficSignal = this.handleTrafficSignal.bind(this);
    this.signalImage = this.signalImage.bind(this);
  }

  handleCars(carColor, newStateCar) {
    this.setState((prevState) => (
      { cars: { ...prevState.cars, [carColor]: newStateCar }})
    );
  }

  handleTrafficSignal(color) {
    this.setState((prevState) => (
      { signal: { ...prevState.signal, color: color }})
    );
  }

  signalImage() {
    const signalColor = this.state.signal.color;
    switch(signalColor) {
      case 'red':
        return red;
      case 'yellow':
        return yellow;
      case 'green':
        return green;
      default:
        return signalColor;
    } 
  };

  render() {
    const contextValue = {
      cars: this.state.cars,
      signal: this.state.signal,
      moveCar: this.handleCars,
      changeSignal: this.handleTrafficSignal,
      signalImage: this.signalImage,
    }
    return (
      <MyContext.Provider value={ contextValue }>
        <div className="container">
          <Cars />
          <TrafficSignal />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;

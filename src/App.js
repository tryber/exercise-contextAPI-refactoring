import React from 'react';
import './App.css';
import MyContext from './MyContext';
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
    };
    this.handleCars = this.handleCars.bind(this);
  }

  handleCars(carColor, newStateCar) {
    this.setState((prevState) => (
      { cars: { ...prevState.cars, [carColor]: newStateCar }})
    );
  }

  render() {
    const contextValue = { 
      cars: this.state,
      moveCar: this.handleCars,
    };
    return (
      <MyContext.Provider value={contextValue}>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
  }

  handleClick(car, side) {
    this.setState({
      [car]: side,
    })
  }

  render() {
    const contextValue = {
      cars: this.state,
      moveCar: this.handleClick,
    }

    return (
      <MyContext.Provider value={ contextValue }>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;

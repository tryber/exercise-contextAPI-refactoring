import React from 'react';
import MyContext from './MyContext';

class Provider extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.handleMoveCar = this.handleMoveCar.bind(this);
  }

  handleMoveCar(car, side) {
    this.setState({
      cars: { ...this.state.cars, [car]: side },
    })
  }

  render() {
    const { children } = this.props;
    return (
      <MyContext.Provider value={{ ...this.state, moveCar: this.handleMoveCar }}>
        {children}
      </MyContext.Provider>
    )
  }
}

export default Provider;

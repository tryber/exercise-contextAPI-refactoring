import React  from 'react';
import CarContext from './CarContext';

class CarProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }
    this.getClickButtonCar = this.getClickButtonCar.bind(this);
  }

  getClickButtonCar(value, state) {
    if (value === 'red') this.setState({ redCar: true },
      () => {
        if(state === true) this.setState({ redCar: false })
      });
    if (value === 'blue') this.setState({ blueCar: true },
      () => {
      if(state === true) this.setState({ blueCar: false })
      });
    if (value === 'yellow') this.setState({ yellowCar: true },
      () => {
        if(state === true) this.setState({ yellowCar: false })
      });
  }

  render() {
    const { children } = this.props;
    return (    
      <CarContext.Provider value={{...this.state, getClick: this.getClickButtonCar}}>
        { children }
      </CarContext.Provider>
    );
  }
}

export default CarProvider;

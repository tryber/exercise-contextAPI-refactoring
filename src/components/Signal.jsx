import React, { Component } from 'react';
import { redSignal, yellowSignal, greenSignal } from '../images';
import { contextSignal } from '../contexts';

export default class Signal extends Component {
  renderSignal = (signalColor) => {
    switch (signalColor) {
      case 'red':
        return redSignal;
      case 'yellow':
        return yellowSignal;
      case 'green':
        return greenSignal;
      default:
        return null;
    } 
  };

  render() {
    return (
      <contextSignal.Consumer >
        { ({ signalColor }) =>
          <img
            className="signal"
            src={this.renderSignal(signalColor)}
            alt=""
          />
        }
      </contextSignal.Consumer>
    )
  }
}

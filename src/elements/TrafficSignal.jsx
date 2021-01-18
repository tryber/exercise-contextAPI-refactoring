import React, { Component } from 'react';
import { TrafficControllerBtn, Signal } from '../components';
import { contextSignal } from '../contexts';

export default class TrafficSignal extends Component {
  constructor() {
    super();
    this.state={
      signalColor: 'red',
    }
    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal({ target: { id }}) {
    this.setState({ signalColor: id })
  }

  render() {
    const sinal={
      signalColor: this.state.signalColor,
      changeSignal: this.changeSignal,
    }
    return (
      <contextSignal.Provider value={ sinal } >
        <div className="button-container">
          <TrafficControllerBtn color="red" />
          <TrafficControllerBtn color="yellow" />
          <TrafficControllerBtn color="green" />
        </div>
        <Signal />
      </contextSignal.Provider>
    );
  }
};


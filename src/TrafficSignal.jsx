import React from 'react';
import MyContext from './MyContext';

function TrafficSignal() {
  return (
    <MyContext.Consumer>
      {
        value => (
          <div>
            <div className="button-container">
              <button onClick={() => value.changeSignal('red')} type="button">
                Red
              </button>
              <button onClick={() => value.changeSignal('yellow')} type="button">
                Yellow
              </button>
              <button onClick={() => value.changeSignal('green')} type="button">
                Green
              </button>
            </div>
            <img className="signal" src={value.signalImage()} alt="traffic signal" />
          </div>
        )
      }
    </MyContext.Consumer>
  );
}
  
export default TrafficSignal;

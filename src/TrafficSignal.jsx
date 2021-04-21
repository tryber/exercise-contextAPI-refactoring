// src/TrafficSignal.jsx

import React from 'react';
// import PropTypes from 'prop-types';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import TrafficContext from './context/traffic-context';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

class TrafficSignal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signal: {
        color: 'red',
      }
    }
    this.changeSignal = this.changeSignal.bind(this)
  }

  changeSignal(signal) {
    this.setState({signal: {color: signal}})
  }
  render() {
    return (
      <TrafficContext.Provider value={{...this.state, changeSignal: this.changeSignal}}>
        <TrafficContext.Consumer>
          {({ signal : { color: signalColor }, changeSignal }) => (
            <div>
              <div className="button-container">
                <button onClick={() => changeSignal('red')} type="button">
                  Red
                </button>
                <button onClick={() => changeSignal('yellow')} type="button">
                  Yellow
                </button>
                <button onClick={() => changeSignal('green')} type="button">
                  Green
                </button>
              </div>
              <img className="signal" src={renderSignal(signalColor)} alt="" />
            </div>
          )}
        </TrafficContext.Consumer>
      </TrafficContext.Provider>
    );
  }
}
// const mapStateToProps = (state) => ({
//   signalColor: state.trafficReducer.signal.color
// });

// const mapDispatchToProps = { changeSignal };

// TrafficSignal.propTypes = {
//   changeSignal: PropTypes.func.isRequired,
//   signalColor: PropTypes.string.isRequired,
// };

export default TrafficSignal;

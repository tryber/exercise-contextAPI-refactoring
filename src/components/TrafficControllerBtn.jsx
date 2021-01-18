import React from 'react';
import { contextSignal } from '../contexts';

export default function TrafficControllerBtn({ color }) {
  return (
    <contextSignal.Consumer>
      { ({ changeSignal }) =>
        <button
          onClick={ changeSignal }
          id={ color }
          type="button"
        >
          {color}
        </button>
      }
    </contextSignal.Consumer>
  );
}

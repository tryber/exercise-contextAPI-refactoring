import React from 'react';
import { render } from 'react-dom';

import App from './App';
import { Provider } from './context/Provider';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);

import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store';
import App from './src'

export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}


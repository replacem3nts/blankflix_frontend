import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'

let store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    id: 1,
    username: 'coolhandluke',
    token: '',
    sitename: 'Surfer'
  }
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

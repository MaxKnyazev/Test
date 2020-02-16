import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

import {AppColorizer, AppCounter} from './App';
import './index.css';

console.log('***AppCounter');
console.log(AppCounter);
console.log('***AppColorizer');
console.log(AppColorizer);

const destination = document.querySelector('#root');

//STORE          
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AppCounter />
    <AppColorizer />
  </Provider>,
  destination
);


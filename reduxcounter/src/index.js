import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

import {AppColorizer} from './App';
import Counter from './Counter';

import './index.css';

console.log('***AppCounter');
console.log(Counter);
console.log('***AppColorizer');
console.log(AppColorizer);

const destination = document.querySelector('#root');

//STORE          
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
    <AppColorizer />
  </Provider>,
  destination
);


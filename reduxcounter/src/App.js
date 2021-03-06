import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

import Counter from './Counter';
import Colorizer from './Colorizer';
import Resizer from './Resizer';

console.log('***AppCounter');
console.log(Counter);
console.log('***AppColorizer');
console.log(Colorizer);

//STORE          
const store = createStore(reducer);

export default (  
  <Provider store={store}>
    <Counter />
    <hr/>
    <Colorizer />
    <hr/>
    <Resizer />
  </Provider>
)

// import {connect} from 'react-redux';
// import Counter from './Counter';
// import Colorizer from './Colorizer';

//сопоставление состояния Redux со свойствами компонента
// function mapStateToProps(state) {
//   return {
//     countValue: state.count,
//     RValue: state.R,
//     GValue: state.G,
//     BValue: state.B,
//   };
// }

//ACTIONS         
// const increaseAction = {type: 'increase'};
// const decreaseAction = {type: 'decrease'};
// const addR = {type: 'ADD_R'};
// const addG = {type: 'ADD_G'};
// const addB = {type: 'ADD_B'};

//сопоставление действий Redux со свойствами компонента
// function mapDispatchToProps(dispatch) {
//   return {
//     increaseCount: function() {
//       return dispatch(increaseAction);
//     },
//     decreaseCount: function() {
//       return dispatch(decreaseAction);
//     },
//     addR: function() {
//       return dispatch(addR);
//     },
//     addG: function() {
//       return dispatch(addG);
//     },
//     addB: function() {
//       return dispatch(addB);
//     }
//   };
// }

// HOC----------
// export const AppCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
// export const AppColorizer = connect(mapStateToProps, mapDispatchToProps)(Colorizer);

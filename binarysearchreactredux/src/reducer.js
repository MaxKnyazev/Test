import {randomInteger} from './utils/utils.js';
// const  randomInteger = (min, max) => {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }

const  num = randomInteger(1, 99);
console.log('num = ' + num);

const bestResult = localStorage.getItem('game');
console.log(`bestResult ${bestResult}`);

// let inputValue = +document.querySelector('.BSCalc__input').value;


let initialState = {
  count : 0,
  few : false,
  many : false,
  correct : false,
  num,
  bestResult,
}

function reducer(state = initialState, action) {
  
  switch (action.type) {
    case 'RESULT': if (true){
      // console.log(`input= ${inputValue}`);
      return {...state, 
              count: state.count + 1,
            };
    } 
      

    // case 'changeFew': 
    //   return {...state, few: !state.few};

    // case 'changeMany': 
    //   return {...state, many: !state.many};

    // case 'changeCorrect': 
    //   return {...state, correct: !state.correct};
      
    // eslint-disable-next-line no-fallthrough
    default: return state;
  }
}

export default reducer;
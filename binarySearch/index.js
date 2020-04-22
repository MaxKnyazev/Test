console.log('Started...');

function init () {
  const appBS = document.querySelector('.BS');
  const input = appBS.querySelector('.BSCalc__input');
  const calc = appBS.querySelector('.BSCalc__calc');
  const few = appBS.querySelector('#few');
  const many = appBS.querySelector('#many');
  const correct = appBS.querySelector('#correct');
  const counter = appBS.querySelector('.BSResult__count');
  const num = randomInteger(1, 99);
  const bestResult = appBS.querySelector('#bestResult');

  return function () {
    return {
      appBS,
      input,
      calc,
      few,
      many,
      correct,
      counter,
      num,
      bestResult,
    }
  }
}

const initValue = init()();
console.log(initValue);

let count = 0;
initValue.bestResult.innerHTML = localStorage.getItem('game');

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function setNone (elem) {
  elem.classList.add('none');
}

function removeNone (elem) {
  elem.classList.remove('none');
}

function setNoneAll (...elements) {
  elements.forEach(elem => setNone(elem))
}

function onCalcClick () {
  count += 1;
  initValue.counter.innerHTML = count;

  setNoneAll(correct, few, many);

  if (+initValue.input.value === initValue.num) {
    removeNone(correct);
    if (count < localStorage.getItem('game')) {
      localStorage.setItem('game', count);
      initValue.bestResult.innerHTML = count;
    }
  }
  
  if (+initValue.input.value > initValue.num) {
    removeNone(many);
  }

  if (+initValue.input.value < initValue.num) {
    removeNone(few);
  }
}

initValue.calc.addEventListener('click', onCalcClick);

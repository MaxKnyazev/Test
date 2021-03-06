import React from 'react';
import './App.css';
import ChooseNumber from './ChooseNumber';
import CountTries from './CountTries';
import BestResult from './BestResult';

class App extends React.Component {
  // state = {
  //   count : 0,
  //   few : false,
  //   many : false,
  //   correct : false,
  // }


  // randomInteger = (min, max) => {
  //   // случайное число от min до (max+1)
  //   let rand = min + Math.random() * (max + 1 - min);
  //   return Math.floor(rand);
  // }

  // num = this.randomInteger(1, 99);


  // inputValue = '0';

  // onInputChange = (e) => {
  //   this.inputValue = e.target.value;
  //   console.log(this.inputValue);
  // }

  // onChooseClick = () => {
  //   this.setState((prevState) => {
  //     return {
  //       count : prevState.count + 1,
  //       few : false,
  //       many : false,
  //       correct : false,
  //     }
  //   })

  //   if (this.num === +this.inputValue) {
  //     this.setState({
  //       correct : true,
  //     });

  //     if (this.bestResult > this.state.count) {
  //       localStorage.setItem('game', this.state.count + 1)
  //     }
  //   }

  //   if (this.num < +this.inputValue) {
  //     this.setState({
  //       many : true,
  //     });
  //   }

  //   if (this.num > +this.inputValue) {
  //     this.setState({
  //       few : true,
  //     });
  //   }
  // }

  // bestResult = localStorage.getItem('game');//??? занести в стейт? как в статье?

  render () {
    // console.log(`bestResult ${this.bestResult}`);
    return (
      <main className='BS'>
        <header className='BSHeader'>
          <h1 className='BSHeader__title'>Binary Search</h1>
          <p className='BSHeader__task'>Загадано целое цисло в диапазоне от 1 до 100.</p>
          <p className='BSHeader__task'>Постарайтесь угадать это число за минимальное количество попыток.</p>
          <p className='BSHeader__task'>Лучшее количество попыток: 
            <BestResult />
          </p>
        </header>

        <ChooseNumber />
        <CountTries />

      </main>
    );
  }
}

export default App;
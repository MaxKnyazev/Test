import React from 'react';
import './App.css';
import ChooseNumber from './ChooseNumber';
import CountTries from './CountTries';

class App extends React.Component {
  state = {
    count : 0,
  }

  bestResult = localStorage.getItem('game');//??? занести в стейт? как в статье?

  randomInteger = (min, max) => {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
//TODO: Доабвить три флага в state для компонентов, которые будут скрываться и появляться на странице.

  onChooseClick = () => {
    this.setState((prevState) => {
      return {
        count : prevState.count + 1,
      }
    })
  }

  componentDidMount () {

  }

  render () {
    const num = this.randomInteger(1, 99);//???????????????????? 
    return (
      <main className='BS'>
        <header className='BSHeader'>
          <h1 className='BSHeader__title'>Binary Search</h1>
          <p className='BSHeader__task'>Загадано целое цисло в диапазоне от 1 до 100.</p>
          <p className='BSHeader__task'>Постарайтесь угадать это число за минимальное количество попыток.</p>
          <p className='BSHeader__task'>Лучшее количество попыток: <span id='bestResult'>{this.bestResult}</span></p>
        </header>

        <ChooseNumber onChooseClick={this.onChooseClick}/>

        <CountTries count = {this.state.count}/>
      </main>
    );
  }
}

export default App;
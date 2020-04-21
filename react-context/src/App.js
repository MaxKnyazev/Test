import React from 'react';
import './App.css';

const ColorContext = React.createContext('black');

// ВНИМАНИЕ: contextType зарезервирован
// для использования в классовых компонентах
// Разобраться!!!
class Animal extends React.Component {
  state = {
    color: 'red',
  }

  render() {
    return (
      <div className = 'Animal'>
        Animal
        <Dog state = {this.state} />
      </div>
    )
  }
}

class Dog extends React.Component {
  
  render() {
    return (
      <div className = 'Dog'>
        Dog
        <Mops/>
      </div>
    )
  }
}

function Mops () {
  // вариант 1 : статическое поле класса
  // static contextType = ColorContext;

  return (
    <ColorContext.Consumer>
    {(color) => (
      <div className = 'Mops' style = {{color}}>Mops</div>
    )}
    </ColorContext.Consumer>
  )
}
// вариант 2, то же самое, что и вариант 1
// но в функциональном стиле
// Mops.contextType = ColorContext;

function App() {
  return (
    <div className='App'>
      <ColorContext.Provider value = 'orange'>
        <Animal />
      </ColorContext.Provider>
    </div>
  );
}

export default App;

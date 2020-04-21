import React from 'react';
import './App.css';

const ColorContext = React.createContext('black');

function Mops () {
  // static contextType = ColorContext;

  return (
    <ColorContext.Consumer>
    {(color) => (
      <div className = 'Mops' style = {{color}}>Mops</div>
    )}
    </ColorContext.Consumer>
  )
}
Mops.contextType = ColorContext;

// ВНИМАНИЕ: contextType зарезервирован
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

function App() {
  return (
    <div className='App'>
      <ColorContext.Provider value = 'red'>
        <Animal />
      </ColorContext.Provider>
    </div>
  );
}

export default App;

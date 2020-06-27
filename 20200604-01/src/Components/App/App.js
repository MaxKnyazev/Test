import React from 'react';
import './App.css';

import DeleteContainer from '../DeleteContainer/DeleteContainer';
import NamesContainer from '../NamesContainer/NamesContainer';
import DeleteButton from '../DeleteButton/DeleteButton';

class App extends React.Component {
  state = {
    names: ['Иван', 'Максим', 'Сергей', 'Василий', 'Петр', 'Дмитрий'],
    deleteNames : [],
  }

  randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

  clickHandler = () => {
    if (this.state.names.length !== 0) {
      let temp = this.randomInteger(0, this.state.names.length - 1);
      console.log(this.state);

      this.setState(({names, deleteNames}) => ({
        deleteNames : [...deleteNames, names[temp]],
        names : [...names.slice(0, temp), ...names.slice(temp + 1)]
      }))
    }
  }

  render () {
    return (
      <div className="App">
        <NamesContainer names={this.state.names}/>
        <DeleteContainer deleteNames={this.state.deleteNames}/>
        <DeleteButton clickHandler={this.clickHandler}/>
      </div>
    );
  }
}

export default App;

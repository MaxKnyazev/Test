import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    state = {
      x : 0,
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;

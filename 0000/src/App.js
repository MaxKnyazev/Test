import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.hello = 'Hello!';
  }

  render() {
    return (
      <h1>{this.hello}</h1>
    );
  }
}

export default App;

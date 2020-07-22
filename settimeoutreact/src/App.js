import React, { Component } from 'react';
import './App.css';

const delay = ms => new Promise ((resolve) => {
  setTimeout(() => {
    resolve();
  }, ms)
});

class App extends Component {

  state = {
    text: 'Кнопка',
  }

  count = 0;
  buttonRef = React.createRef();

  clickHandler = (e) => {
    this.buttonRef.current.classList.toggle('correct');

    setTimeout(() => {
      this.buttonRef.current.classList.toggle('correct');
      this.buttonRef.current.children[0].style.opacity = 0;
      setTimeout(() => {
        this.setState({
          text: 'Button'
        })
        this.buttonRef.current.children[0].style.opacity = 1;
      }, 500)
    }, 1500)
  }

  clickHandlerAsync = async (e) => {
    this.buttonRef.current.classList.toggle('correct');

    await delay(1000);
    this.buttonRef.current.classList.toggle('correct');
    this.buttonRef.current.children[0].style.opacity = 0;
    await delay(500);
    this.setState({
      text: 'Button'
    })
    this.buttonRef.current.children[0].style.opacity = 1;
  }

  render () {
    return (
      <div className="App">
        <span ref={this.buttonRef} onClick={this.clickHandlerAsync} className="button">
          <span className='text'>{this.state.text}</span>
        </span>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // создадим реф в поле `textInput` для хранения DOM-элемента
    this.textInput = React.createRef();
    this.h1Ref = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Установим фокус на текстовое поле с помощью чистого DOM API
    // Примечание: обращаемся к "current", чтобы получить DOM-узел
    this.textInput.current.focus();
  }

  changeColor = () => {
    this.h1Ref.current.style.backgroundColor = 'red';
  }

  render() {
    // описываем, что мы хотим связать реф <input>
    // с `textInput` созданным в конструкторе
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} 
        />

        <input
          type="button"
          value="Фокус на текстовом поле"
          onClick={this.focusTextInput}
        />
        
        <h1 
          ref = {this.h1Ref}
          onClick = {this.changeColor}
        >Hello World!</h1>
      </div>
    );
  }
}

export default App;

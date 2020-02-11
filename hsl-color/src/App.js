import React, {PureComponent} from 'react';
import './App.css';
import ColorSetting from './ColorSetting';
import {Route, NavLink} from 'react-router-dom';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      h : 280,
      s : 100,
      l : 50,
    }
  }

  options = {
    MIN : 0,
    MAX : 100,
    STEP : 1
  }

  options_H = {
    MAX : 360,
  }

  addH = () => {
    if (this.state.h < this.options_H.MAX) {
      this.setState({
        h : +this.state.h + +this.options.STEP,
      }); 
    }  
  }

  addSL = (part) => {
    if (this.state[part] < this.options.MAX) {
      this.setState({
        [part] : +this.state[part] + +this.options.STEP,
      }); 
    }  
  }

  subHSL = (part) => {
    if (this.state[part] > this.options.MIN) {
      this.setState({
        [part] : this.state[part] - this.options.STEP,
      });
    }  
  }

  changeRangeH = (event) => {
    this.setState({
      h : event.target.value
    })  
  }

  changeRangeS = (event) => {
    this.setState({
      s : event.target.value
    })  
  }

  changeRangeL = (event) => {
    this.setState({
      l : event.target.value
    })  
  }

  // changeRange = (event, part) => {
  //   this.setState({
  //     [part] : event.target.value
  //   })  
  // }
  

  render() { 
    const { h, s, l } = this.state;

    const argsH = {
      partColor : 'h',
      value : h, 
      addValue : this.addH,
      subValue : this.subHSL.bind(null, 'h')
    }

    const argsS = {
      partColor : 's',
      value : s, 
      addValue : this.addSL.bind(null, 's'),
      subValue : this.subHSL.bind(null, 's')
    }

    const argsL = {
      partColor : 'l',
      value : l, 
      addValue : this.addSL.bind(null, 'l'),
      subValue : this.subHSL.bind(null, 'l')
    }

    return ( 
      <div className = 'App'>
        <div className = 'App__wrapper'>
          <div 
            className = 'App__square' 
            style = {{ backgroundColor : `hsl(${h}, ${s}%, ${l}%)` }}>
          </div>
      
          <nav className = 'App__nav'>
            <ul className = 'App__list'>
              <li><NavLink className = 'App__link' to = '/h'>H</NavLink></li>
              <li><NavLink className = 'App__link' to = '/s'>S</NavLink></li>
              <li><NavLink className = 'App__link' to = '/l'>L</NavLink></li>
            </ul>
          </nav>
          
          <Route 
            path = '/h' 
            render = {() => <ColorSetting 
              {...argsH} 
              {...this.options} 
              {...this.options_H} 
              changeRange={this.changeRangeH}
            />} 
          />
          <Route 
            path = '/s' 
            render = {() => <ColorSetting 
              {...argsS} 
              {...this.options}
              changeRange={this.changeRangeS}
            />} 
          />
          <Route 
            path = '/l' 
            render = {() => <ColorSetting 
              {...argsL} 
              {...this.options}
              changeRange={this.changeRangeL}
            />} 
          />
        </div>
      </div>
     );
  }
}
 
export default App;
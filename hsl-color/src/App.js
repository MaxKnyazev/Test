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
    STEP : 10
  }

  options_H = {
    MAX : 360,
  }

  addH = () => {
    this.setState(prevState => 
      prevState.h === this.options_H.MAX - this.options.STEP 
      ? { h : 0 } 
      : { h : prevState.h + this.options.STEP });
  }

  subH = () => {
    this.setState(prevState => 
      prevState.h === 0 
      ? { h : this.options_H.MAX - this.options.STEP } 
      : { h : prevState.h - this.options.STEP });  
  }

  // addS = () => {
  //   if (this.state.s < 100) {
  //     this.setState({
  //       s : this.state.s + App.STEP,
  //     }); 
  //   }  
  // }

  addSL = (part) => {
    if (this.state[part] < this.options.MAX) {
      this.setState({
        [part] : this.state[part] + this.options.STEP,
      }); 
    }  
  }

  subSL = (part) => {
    if (this.state[part] > this.options.MIN) {
      this.setState({
        [part] : this.state[part] - this.options.STEP,
      });
    }  
  }

  // subS = () => {
  //   if (this.state.s > 0) {
  //     this.setState({
  //       s : this.state.s - App.STEP,
  //     });
  //   }  
  // }

  // addL = () => {
  //   if (this.state.l < 100) {
  //     this.setState({
  //       l : this.state.l + App.STEP,
  //     }); 
  //   }    
  // }

  // subL = () => {
  //   if (this.state.l > 0) {
  //     this.setState({
  //       l : this.state.l - App.STEP,
  //     });
  //   }    
  // }

  changeRangeS = (event) => {
      this.setState({
        s : event.target.value
    })  
  }

  render() { 
    const { h, s, l } = this.state;

    const argsH = {
      partColor : 'h',
      value : h, 
      addValue : this.addH,
      subValue : this.subH
    }

    const argsS = {
      partColor : 's',
      value : s, 
      addValue : this.addSL.bind(null, 's'),
      subValue : this.subSL.bind(null, 's')
    }

    const argsL = {
      partColor : 'l',
      value : l, 
      addValue : this.addSL.bind(null, 'l'),
      subValue : this.subSL.bind(null, 'l')
    }

    return ( 
      <div className = 'App'>
        <div 
          className = 'App__square' 
          style = {{ backgroundColor : `hsl(${h}, ${s}%, ${l}%)` }}>
        </div>

        <nav>
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
          />} 
        />
      </div>
     );
  }
}
 
export default App;
import React, {PureComponent} from 'react';
import './App.css';
import ColorSetting from './ColorSetting';
import {Route, NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;

  color: #fff;
  background-color: rgb(73, 0, 107);
`;

const StyledAppWrapper = styled.div`
  max-width: 98vmin;
  width: 90vmin;
  min-width: 300px;
  margin: 20px 0 40px 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const StyledAppSquare = styled.div`
    width: 75vmin;
    height: 75vmin;

    background-color: #fff;
    border: 3px solid #fff;

    transition: all 250ms linear;

    &:hover {
      background-color: #fff;
      border: 3px solid #fff;
      border-radius: 20px;
    }

  @media (min-width: 590px) {
    max-width: 500px;
    max-height: 500px;
  }
`;

const StyledAppNav = styled.nav`
  margin-top: 2rem;
`;

const StyledAppList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  width: 75vmin;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  border: 3px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vmin;
  height: 15vmin;
  font-size: 5vmax;
  max-width: 130px;
  max-height: 130px;
  transition: all 250ms linear;

    &:hover {
      background-color: #fff;
      color: rgb(73, 0, 107); 
      border-radius: 10px;
    }

    &.active {
      background-color: rgb(175, 89, 255);
      border: 3px solid rgb(175, 89, 255);
    }

      &.active:hover {
        color: #fff;
        border: 3px solid rgb(175, 89, 255);
        border-radius: 10px;
      }

    @media (min-width: 1100px) {
      font-size: 3.75rem;
    }
`;

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

  render() { 
    const { h, s, l } = this.state;

    let argsH = {
      partColor : 'h',
      value : h, 
      addValue : this.addH,
      subValue : this.subHSL.bind(null, 'h'),
      changeRange : this.changeRangeH,
    }

    let argsS = {
      partColor : 's',
      value : s, 
      addValue : this.addSL.bind(null, 's'),
      subValue : this.subHSL.bind(null, 's'),
      changeRange : this.changeRangeS,
    }

    let argsL = {
      partColor : 'l',
      value : l, 
      addValue : this.addSL.bind(null, 'l'),
      subValue : this.subHSL.bind(null, 'l'),
      changeRange : this.changeRangeL,
    }

    argsH = {...argsH, ...this.options, ...this.options_H};
    argsS = {...argsS, ...this.options};
    argsL = {...argsL, ...this.options};

    return ( 
      <StyledApp>
        <StyledAppWrapper>
          <StyledAppSquare style = {{ backgroundColor : `hsl(${h}, ${s}%, ${l}%)` }} />
      
          <StyledAppNav>
            <StyledAppList>
              <li><StyledNavLink to = '/h'>H</StyledNavLink></li>
              <li><StyledNavLink to = '/s'>S</StyledNavLink></li>
              <li><StyledNavLink to = '/l'>L</StyledNavLink></li>
            </StyledAppList>
          </StyledAppNav>
          
          <Route path = '/h' render = {() => <ColorSetting {...argsH} />} />
          <Route path = '/s' render = {() => <ColorSetting {...argsS} />} />
          <Route path = '/l' render = {() => <ColorSetting {...argsL} />} />
        </StyledAppWrapper>
      </StyledApp>
     );
  }
}
 
export default App;
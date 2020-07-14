import React from 'react';
import styled from 'styled-components';

const DURATION_TRANSITION = '500ms';
const DARK_COLOR = 'darkmagenta';
const LITE_COLOR = 'white';

const setBackground = (props) => {
  console.log(props);
  console.log(props.userTheme);
  return props.userTheme ? DARK_COLOR : LITE_COLOR;
}

const setColor = (props) => props.userTheme ? LITE_COLOR : DARK_COLOR;

const WrapperCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${setBackground};
  transition: background-color ${DURATION_TRANSITION} ease-in;
  flex-wrap: wrap;
`;

const Paragraph = styled.p`
  font-size: 5vmin;
  color: ${setColor};
  transition: color ${DURATION_TRANSITION} ease-in;
  font-size: calc(35px + 4vmin);
`;

const Button = styled.button`
  background: ${setBackground};
  color: ${setColor};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${setColor};
  border-radius: 3px;
  cursor: pointer;
  transition: 
    color ${DURATION_TRANSITION} ease-in, 
    background-color ${DURATION_TRANSITION} ease-in, 
    border ${DURATION_TRANSITION} ease-in;
  
  &:hover {
    background: ${setColor};
    color: ${setBackground};
  }
`;

class Counter extends React.Component {
  state = { 
    count: 0,
    theme: false,
   }

  increment = () => this.setState({ count: this.state.count + 1 })
  decrement = () => this.setState({ count: this.state.count - 1 })
  changeTheme = () => this.setState({ theme: !this.state.theme })

  render() {
    const {theme, count} = this.state;
    // console.log(theme);
    return (
      <WrapperCounter userTheme={theme}>
        <Paragraph userTheme={theme}>{count}%</Paragraph>
        <Button userTheme={theme} onClick={this.increment}>increment</Button>
        <Button userTheme={theme} onClick={this.decrement}>decrement</Button>
        <Button userTheme={theme} onClick={this.changeTheme}>Change theme</Button>
      </WrapperCounter>
    )
  }
}

export default Counter;

/***
 *
 * -----------------------------------------------------
 
https://styled-components.com/docs/advanced#referring-to-other-components

 * // Static object
const Box = styled.div({
  background: 'palevioletred',
  height: '50px',
  width: '50px'
});

// Adapting based on props
const PropsBox = styled.div(props => ({
  background: props.background,
  height: '50px',
  width: '50px'
}));

render(
  <div>
    <Box />
    <PropsBox background="blue" />
  </div>
);
-------------------------------

&:hover {}


Stylis
 */
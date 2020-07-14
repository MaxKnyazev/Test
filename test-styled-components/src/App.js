import React from 'react';
import './App.css';
import styled from 'styled-components';
import Counter from './Counter';

const Title = styled.h1`
   font-size: 1.5em;
   text-align: center;
   color: palevioletred;
 `;

const Wrapper = styled.section`
 padding: 2em;
 background: papayawhip;
`;

function App() {
  return (
    <>
      <h1>Start...</h1>

      <Wrapper>
        <Title>Test project with Styled Components</Title>
      </Wrapper>

      <Counter />
    </>
  );
}

export default App;

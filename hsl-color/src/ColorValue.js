import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  font-size: 5vmax;

  @media (min-width: 1100px) {
    font-size: 5rem;
  }
`;

const ColorValue = ({value}) => {
  return (
    <StyledSpan>{value}</StyledSpan>
  )
} 

export default ColorValue;
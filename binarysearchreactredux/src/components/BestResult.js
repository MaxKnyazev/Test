import React from 'react';
// import './CountTries.css';
import {connect} from 'react-redux';

const BestResult = ({bestResultR}) => {
  return (
    <span id='bestResult'>{bestResultR}</span>
    )
} 

function mapStateToProps(state) {
  return {
    bestResultR: state.bestResult,
  }
}

export default connect(mapStateToProps)(BestResult);
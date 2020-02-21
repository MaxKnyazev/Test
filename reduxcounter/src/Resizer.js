import React from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Resizer = (props) => {
  const classes = useStyles();

    const {wValue, hValue, addWidth, addHeight} = props;
    const styleWrapper = {
          backgroundColor : `rgb(0, 125, 0)`,
          width: `${wValue}px`,
          height: `${hValue}px`,
        };
    const styleButton = {margin: '30px', padding: '30px', fontSize: '3vmin'}

    return (
      <>
        <div style={styleWrapper} />
        <button 
          style={styleButton}
          onClick={addWidth}
        >W +</button>
        <button 
          style={styleButton}
          onClick={addHeight}
        >H +</button>
        <div 
          className={classes.root}
          onClick={addHeight}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
  
      </>
    );
}

//ACTIONS         
const addWidth = {
  type: 'ADD_WIDTH',
  value: 10
};
const addHeight = {
  type: 'ADD_HIGHT',
  value: 10
};

//сопоставление состояния Redux со свойствами компонента
function mapStateToProps(state) {
  return {
    wValue: state.width,
    hValue: state.height,
  };
}

//сопоставление действий Redux со свойствами компонента
function mapDispatchToProps(dispatch) {
  return {
    addWidth: function() {
      return dispatch(addWidth);
    },
    addHeight: function() {
      return dispatch(addHeight);
    }
  };
}

// HOC----------
export default connect(mapStateToProps, mapDispatchToProps)(Resizer);


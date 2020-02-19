const initialState = {
      count: 0,
      R: 0,
      G: 0,
      B: 0,
    };

//REDUCER         
function reducer(state = initialState, action) {

  console.log('state-->',state);

  switch (action.type) {
    case 'increase': 
      return {...state, count: state.count + 1};
    case 'decrease': 
      return {...state, count: state.count - 1};
    case 'ADD_R': 
      return {...state, R: state.R + 15};
    case 'ADD_G': 
      return {...state, G: state.G + 15};
    case 'ADD_B': 
      return {...state, B: state.B + 15};  
    default: 
      return state;
  }
}

export default reducer;
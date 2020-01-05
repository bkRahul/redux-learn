//counter reducer

import * as actionTypes from '../actions/actionTypes'

const initialState = {
  counter: 10
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);

      newState.counter = state.counter + 1;
      return newState;

    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + 10
      };

    case actionTypes.SUB:
      return {
        ...state,
        counter: state.counter - 10
      };
  }
  return state;
};

export default reducer;

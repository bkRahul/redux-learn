//counter reducer

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  counter: 10,
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
        counter: state.counter - 1,
      };

    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + 10 });

    case actionTypes.SUB:
      return updateObject(state, { counter: state.counter - 10 });

    default:
      return state;
  }
};

export default reducer;

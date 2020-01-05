//result reducer

import * as actionTypes from '../actions/actionTypes'

const initialState = {
  results: []
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.STORERESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETERESULT:
      // const newArr = [...state.results];
      // newArr.splice(1, 1);
      //const id = 5;
      //const newArr = state.results.filter((result, index) => index !== id)
      const newArr = state.results.filter(
        result => result.id !== action.resultId
      );
      return {
        ...state,
        results: newArr
      };
  }
  return state;
};

export default reducer;

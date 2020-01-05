//result reducer

import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  // const newArr = [...state.results];
  // newArr.splice(1, 1);
  //const id = 5;
  //const newArr = state.results.filter((result, index) => index !== id)
  const newArr = state.results.filter(result => result.id !== action.resultId);
  return updateObject(state, {
    results: newArr
  });
};

const storeResult = (state, action) => {
  updateObject(state, {
    results: state.results.concat({ id: new Date(), value: action.result * 3 })
  });
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORERESULT:
      return storeResult(state, action);

    case actionTypes.DELETERESULT:
      return deleteResult(state, action);
  }
  return state;
};

export default reducer;

import * as actionTypes from './actionTypes'

export const saveResult = (result) => {
    return {
        type: actionTypes.STORERESULT,
        result: result
      };
    
}

export const storeResult = (result) => {
    return dispatch => {
        setTimeout(()=> {
            dispatch(saveResult(result))
        }, 2000)
    }
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETERESULT,
    resultId: id
  };
};

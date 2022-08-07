import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case actionTypes.FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

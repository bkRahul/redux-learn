import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';

export const fetchUsersStart = () => {
  return {
    type: actionTypes.FETCH_USERS_START,
  };
};

export const fetchUsersSuccess = users => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailed = error => {
  return {
    type: actionTypes.FETCH_USERS_FAILED,
    payload: error,
  };
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersStart());
    axios
      .get('https://jsonplaceholder.typicode.com/users')

      .then(({ data }) => dispatch(fetchUsersSuccess(data)))
      .catch(err => dispatch(fetchUsersFailed(err.message)));
  };
};

import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const Users = props => {
  return <button onClick={props.onFetchUsers}>Fetch Users</button>;
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUsers: () => dispatch(actionCreators.fetchUsers()),
  };
};

export default connect(null, mapDispatchToProps)(Users);

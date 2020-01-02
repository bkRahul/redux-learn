import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class Counter extends Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.cntr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAdd} />
        <CounterControl label="Subtract 10" clicked={this.props.onSub} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.cntr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map(res => {
            return (
              <li
                key={res.id}
                onClick={() => this.props.onDeleteResult(res.id)}
              >
                {res.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

//accessthe global state
const mapStateToProps = state => {
  return {
    cntr: state.ctr.counter,
    storedResults: state.res.results
  };
};

//actions
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAdd: () => dispatch({ type: actionTypes.ADD, val: 10 }),
    onSub: () => dispatch({ type: actionTypes.SUB, val: 10 }),
    onStoreResult: result =>
      dispatch({ type: actionTypes.STORERESULT, result: result }),
    onDeleteResult: id =>
      dispatch({ type: actionTypes.DELETERESULT, resultId: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

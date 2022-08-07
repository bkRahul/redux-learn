import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

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

//access the global state through props
const mapStateToProps = state => {
  return {
    cntr: state.ctr.counter,
    storedResults: state.res.results
  };
};

//actions
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAdd: () => dispatch(actionCreators.add(10)),
    onSub: () => dispatch(actionCreators.sub(10)),
    onStoreResult: result => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: id => dispatch(actionCreators.deleteResult(id))
  };
};

//connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

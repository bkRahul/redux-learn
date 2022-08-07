import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';
import Users from './containers/Users/Users';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter />
        <Users />
      </div>
    );
  }
}

export default App;

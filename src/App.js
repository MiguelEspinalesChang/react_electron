import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + electron</h1>
        </header>
        <p className="App-intro">
        es ta wea corre con react + electron :V
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import SpreadsheetController from './containers/SpreadsheetController/SpreadsheetController';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SpreadsheetController />
      </div>
    );
  }
}

export default App;

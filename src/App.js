import React, { Component } from 'react';
import Abc from './Abc'
import './App.css';
import ReactSVG from 'react-svg'

class App extends Component {
  render() {
    return (
      <div className="App">
          <ReactSVG src="./logo.svg" />
        <Abc />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HideableText from './HideableText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World
          </p>
          <div className="App-content">
            <HideableText text="Dynamic Text!" />
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

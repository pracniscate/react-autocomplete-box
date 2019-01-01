import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HideableText from './HideableText';
import AutocompleteText from './AutoCompleteText'
import countries from './countries'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <AutocompleteText items={countries}/>
          <br /><br />
          <AutocompleteText items={['Albert', 'Gustave', 'Goyle', 'Salvador', 'Sam']}/>
        </div>
        {/* <HideableText text="Dynamic Text!" /> */}
      </div>
    );
  }
}

export default App;

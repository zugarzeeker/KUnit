import React, { Component } from 'react';
import './App.css';
import Search from './search';



class App extends Component {
  render() {
    return (
      <div className="pre-app">
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">KUnit</h1>
          
        </header>
        <Search classname="App-search"/>
      </div>
      </div>
    );
  }
}

export default App;
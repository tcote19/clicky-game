import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1>
        </header>
        <div className="App-game">
          {/* game board area*/}
        </div>
      </div>
    );
  }
}

export default App;

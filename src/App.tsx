import React from 'react';
import './App.css';
import AutoComplete from './components/AutoComplete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AutoComplete Component</h1>
        <AutoComplete placeholder="Type to search..." />
      </header>
    </div>
  );
}

export default App;
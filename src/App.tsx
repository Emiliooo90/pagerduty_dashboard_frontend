import React, { useState } from 'react';
import './App.css';
import AutoComplete from './components/AutoComplete';
import Index from './pages/Index';
import Navbar from './components/Navbar/Navbar'; // Import the Navbar component
import Footer from './components/Footer/Footer'; // Import the Footer component

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Navbar /> {/* Move the Navbar component here */}
      <div>
        <header className="App-header">
          <div className="button-container">
            <button onClick={() => setCurrentPage('home')}>Home</button>
            <button onClick={() => setCurrentPage('index')}>Index</button>
          </div>
        </header>
        {currentPage === 'home' && <AutoComplete placeholder="Type to search..." />}
        {currentPage === 'index' && <Index />}
      </div>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;
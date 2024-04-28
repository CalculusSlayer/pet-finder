import React from 'react';
import logo from './_MG_7939 copy.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          pet-finder 9000 (other 8999 versions failed)
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Please visit our sister website
        </a>
      </header>
    </div>
  );
}

export default App;
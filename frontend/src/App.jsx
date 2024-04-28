import { useState } from 'react';
import PetForm from './components/PetForm'; // Make sure this import path matches the file location of PetForm
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pet Finder AI</h1>
      <PetForm />
    </div>
  );
}

export default App;


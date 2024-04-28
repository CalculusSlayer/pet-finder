import { useState } from 'react';
import PetForm from './components/PetForm'; // Make sure this import path matches the file location of PetForm
import PetList from './components/GetPets';
import cuteKitten from './assets/cute_kitten.jpeg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>Pet Finder AI</h1>
      </div>

      <img src={cuteKitten} alt="Cute Kitten" style={{ maxWidth: '40%', height: 'auto' }} />
      <PetForm />
      <PetList />

      <h3>AI Prediction : There might be a lost kitten in the coordinates (599, 620)</h3>
    </>
  );
}

export default App;


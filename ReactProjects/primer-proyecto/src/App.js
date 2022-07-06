import React from 'react';
import './App.css';
import Contador from './components/Contador';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import { Temperatura } from './components/Temperatura';

function App() {
  
  return (
    <div className="App mt-5">
      <h1>Primer Projecto:</h1>
      <Formulario />
      <Contador />
      <Temperatura />
      <Listado />
    </div>
  );
}

export default App;
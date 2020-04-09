import React from 'react';
import './App.css';

import { TodoForm } from './components/TodoForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>My Todo App 0.4</h3>
        < TodoForm />
      </header>
    </div>
  );
}

export default App;

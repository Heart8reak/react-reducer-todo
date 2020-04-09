import React, { useReducer } from 'react';
import './App.css';

import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { initialState, reducer } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  const addTodo = input => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    }

    dispatch({ type: 'ADD_TODO', payload: newTodo })
  }

  const handleComplete = id => {
    dispatch({ type: 'COMPLETED_TODO', payload: id })
  }

  const clearCompleted = id => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>My Todo App 0.4</h3>
        < TodoForm addTodo={addTodo} />
        <br />
        <button
          type='submit'
          onClick={e => {
            e.preventDefault()
            clearCompleted()
          }}
        >Clear</button>
        <TodoList
          state={state}
          handleComplete={handleComplete}
        />
      </header>
    </div>
  );
}

export default App;



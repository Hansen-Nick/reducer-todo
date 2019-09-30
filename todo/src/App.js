import React, {useReducer} from 'react';
import './App.css';
import {reducer, initialAppState} from './reducers/reducerfile'
import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm'

function App() {

  const [state, dispatch] = useReducer(reducer, initialAppState)

  const handleAddButton = (todoName) => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    dispatch({type: 'ADDTASK', payload: newTodo})
  }

  const completeToggle = (id) => {
    dispatch({type: 'TOGGLE_COMPLETE', payload: id})
  }

  return (
    <div className="App">
      {console.log(state)}
      <TodoList data={state.todoData} completeToggle={completeToggle} />
      <TodoForm handleAddButton={handleAddButton} dispatch={dispatch} formState={state.formState} dispatch={dispatch} />
    </div>
  );
}

export default App;

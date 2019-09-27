import React from 'react';

function Todo(props) {
  
  const completed = props.completed ? 'line-through' : 'todo-item'

  return (
    <h1 onClick={() => props.completeToggle(props.id)} className={`${completed}`}>
      {props.todoItem}
    </h1>
)}

export default Todo
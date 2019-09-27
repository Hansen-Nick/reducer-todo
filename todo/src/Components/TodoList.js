import React from 'react';
import Todo from './Todo'

const TodoList = props => {
  return (
      <div>
          {props.data.map( (todoItem) => <Todo key={todoItem.id} todoItem={todoItem.item} id={todoItem.id} completeToggle={props.completeToggle} completed={todoItem.completed}/> )}
      </div>
  )
}

export default TodoList
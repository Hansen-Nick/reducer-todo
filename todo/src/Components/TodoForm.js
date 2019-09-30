import React from 'react'

function TodoForm(props) {
  
  const handleSubmit = ev => {
    ev.preventDefault()
    console.log('I was submitted!')
    props.dispatch({type: 'FORM_RESET'})
    props.handleAddButton(props.formState);

  }

  const handleChanges = ev => {
    props.dispatch({type: 'FORM_UPDATE', payload: ev.target.value})
    console.log(ev.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChanges} value={props.formState} type='text' name='todo_item' placeholder='To-do Item' />
      <button type='submit'>Add To-do Item</button>
      <button onClick={() => props.dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed Items</button>
    </form>
  )
}

export default TodoForm
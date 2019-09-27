export function reducer(state,action) {
  switch(action.type) {
    case 'ADDTASK': 
      return {...state, todoData: [...state.todoData, {
        item: action.payload.task,
        completed: false,
        id: Date.now()}
      ]}
    case 'FORM_UPDATE':
      return {...state, formState: action.payload}
    case 'FORM_RESET':
      return {...state, formState: ''}
    case 'TOGGLE_COMPLETE':
      return {...state, todoData: [...state.todoData.map( (task) => {
        if (task.id === action.payload) {
          return {...task, completed: !task.completed}
        } else {
          return task
        }
      })]}
      case 'CLEAR_COMPLETED':
        return {...state, todoData: [...state.todoData.filter( (task) => !task.completed)]}
    default:
      return state;
  }
}


export const initialAppState = {todoData: [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: "Don't throw computer out window",
    completed: false,
    id: 3892987591
  },
], formState: ''}

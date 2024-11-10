// src/reducers/taskReducer.js

// Initial State

interface ITasks{
  id: string,
  task: string;
  action:string
}

interface IInitialState{
 tasks: [] | ITasks[]
}

const initialState:IInitialState = {
    tasks: [],
  };
  
  // Action Types
  const ADD_TASK = 'ADD_TASK';
  const UPDATE_TASK = 'UPDATE_TASK';
  const DELETE_TASK = 'DELETE_TASK';
  
  // Reducer Function
  export const taskReducer = (state = initialState, action: { type: any; payload: { id: any; }; }) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case UPDATE_TASK:
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, ...action.payload } : task
          ),
        };
      case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  // Action Creators
  export const addTask = (task:ITasks) => ({ type: ADD_TASK, payload: task });
  export const updateTask = (task:ITasks) => ({ type: UPDATE_TASK, payload: task });
  export const deleteTask = (id: string) => ({ type: DELETE_TASK, payload: { id } });
  
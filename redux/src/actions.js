// actions.js
import {
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_FAILURE,
    ADD_TASK,
    COMPLETE_TASK,
    DELETE_TASK,
  } from './actionTypes';
  
  export const fetchTasksRequest = () => ({ type: FETCH_TASKS_REQUEST });
  export const fetchTasksSuccess = (tasks) => ({ type: FETCH_TASKS_SUCCESS, payload: tasks });
  export const fetchTasksFailure = (error) => ({ type: FETCH_TASKS_FAILURE, payload: error });
  
  export const fetchTasks = () => {
    return async (dispatch) => {
      dispatch(fetchTasksRequest());
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const tasks = await response.json();
        dispatch(fetchTasksSuccess(tasks));
      } catch (error) {
        dispatch(fetchTasksFailure('Failed to fetch tasks'));
      }
    };
  };
  
  export const addTask = (task) => ({ type: ADD_TASK, payload: task });
  export const completeTask = (id) => ({ type: COMPLETE_TASK, payload: id });
  export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });
  
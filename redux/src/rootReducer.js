// rootReducer.js
import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
  tasksState: tasksReducer,
});

export default rootReducer;

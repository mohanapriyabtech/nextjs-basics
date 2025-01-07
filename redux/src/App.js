import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

const App = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;

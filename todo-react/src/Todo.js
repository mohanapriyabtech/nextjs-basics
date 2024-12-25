import React, { useState } from 'react'

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
  
    // Add task
    const addTask = () => {
      if (task.trim()) {
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
        setTask("");
      }
    };
  
   
    const toggleTask = (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };
  
    // Delete task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };
  
    return (
      <div className="App">
        <h1>React To-Do List</h1>
        <div className="task-input">
          <input
            type="text"
            value={task}
            placeholder="Add a new task..."
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <span onClick={() => toggleTask(task.id)}>{task.text}</span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

export default Todo
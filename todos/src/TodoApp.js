import React, { useState, useRef, useMemo } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Build a project", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  // Add a new task
  const addTodo = () => {
    if (newTask.trim() === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, task: newTask, completed: false },
    ]);
    setNewTask("");
    inputRef.current.focus(); // Automatically focus on the input field
  };

  // Toggle task completion
  const toggleCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Memoize the calculation of completed tasks to avoid unnecessary recalculations
  const completedCount = useMemo(() => {
    console.log("Calculating completed tasks...");
    return todos.filter((todo) => todo.completed).length;
  }, [todos]);

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        ref={inputRef} 
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTodo}>Add Task</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(todo.id)}
            />
            {todo.task}
          </li>
        ))}
      </ul>

      <h2>
        Total Tasks: {todos.length}, Completed: {completedCount}
      </h2>
    </div>
  );
}

export default TodoApp;
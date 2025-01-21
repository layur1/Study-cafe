// File: TodoList.jsx
import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask('');
    }
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">My Todo List</h1>
      <form onSubmit={addTask} className="todo-form">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          className="todo-input"
        />
        <button type="submit" className="todo-add-btn">Add Task</button>
      </form>

      <ul className="todo-list">
        {tasks.map((t) => (
          <li key={t.id} className="todo-item">
            <span className="todo-text">{t.text}</span>
            <button
              className="todo-delete-btn"
              onClick={() => deleteTask(t.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

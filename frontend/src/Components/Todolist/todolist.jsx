// File: TodoList.jsx
import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Start editing a task
  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  // Save the edited task
  const saveEdit = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, text: editText } : t
      )
    );
    setEditingId(null);
    setEditText('');
  };

  // Sort tasks: incomplete at the top, completed at the bottom
  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);

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
        {sortedTasks.map((t) => (
          <li key={t.id} className={`todo-item ${t.completed ? 'completed' : ''}`}>
            {editingId === t.id ? (
              <div className="edit-task">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="todo-input"
                />
                <button onClick={() => saveEdit(t.id)} className="todo-save-btn">
                  Save
                </button>
              </div>
            ) : (
              <div className="task-display">
                <label className="todo-checkbox-label">
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => toggleTaskCompletion(t.id)}
                    className="todo-checkbox"
                  />
                  <span className="todo-text">{t.text}</span>
                </label>
                {!t.completed && (
                  <button
                    onClick={() => startEditing(t.id, t.text)}
                    className="todo-edit-btn"
                  >
                    <i className="fas fa-edit"></i> {/* Font Awesome Edit Icon */}
                  </button>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

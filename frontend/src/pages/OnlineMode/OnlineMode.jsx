// File: OnlineMode.jsx
import React from 'react';
import './OnlineMode.css';

import Todolist from '../../Components/Todolist/todolist'; 
import PomodoroTimer from '../../Components/PomodoroTimer/PomodoroTimer';



const OnlineMode = () => {
  return (
    <div className="online-mode-container">
      <div className="pomodoro-icon">
        <PomodoroTimer />
      </div>
      <div className="online-mode-gap"></div>
      <div className="todo-icon">
        <Todolist />
      </div>
    </div>
  );
};

export default OnlineMode;

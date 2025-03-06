import React from "react";
import Pomodoro from "../../components/Pomodoro/Pomodoro"; // Ensure correct path
import TodoList from "../../Components/TodoList/TodoList"; // Ensure correct path
import Draggable from "react-draggable";
import "../OnlineMode/onlineMode.css"; // Ensure this file exists

const OnlineMode = () => {
  return (
    <div className="online-mode-container">
      <div className="todo-list-container">
        <TodoList />
      </div>
      <div className="pomodoro-timer-container">
        <Pomodoro />
      </div>
    </div>
  );
};

export default OnlineMode;
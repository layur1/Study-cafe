import React from "react";
import Hero from './Components/Hero/Hero'
import TodoList from "./Components/Todolist/todolist";
import Navigationbar from "./Components/Navigationbar/Navigationbar";
import PomodoroTimer from "./Components/PomodoroTimer/PomodoroTimer";


function App() {  return (
    <div>
      <PomodoroTimer/>
      <TodoList/>
    </div>
  );
}

export default App;

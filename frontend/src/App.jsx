import React from "react";
import Hero from './Components/Hero/Hero'
import TodoList from "./Components/Todolist/todolist";
import Navigationbar from "./Components/Navigationbar/Navigationbar";


function App() {  return (
    <div>
      <Navigationbar/>
      <TodoList/>
    </div>
  );
}

export default App;

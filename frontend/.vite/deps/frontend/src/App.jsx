import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Home from './Pages/Home/Home'
import Picture from './Pages/Picture/Picture'
import Pomodoro from './Components/Pomodoro/Pomodoro'
import TodoList from './Components/TodoList/TodoList'






const App = () => {
  return (
   
       <div>
          <Navbar/>
          <Hero/>
          <Home/>
          <Picture/>
      </div>
    
  );
}

export default App;
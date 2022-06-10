import React, { useState, useEffect } from "react";
import Navbar from "./Components/UI/Navbar";
import Timer from "./Components/Timer/Timer";
import TaskList from "./Components/Tasks/TaskList";


const App = () => {
  

  return (
    <div className="App">
      <Navbar />
      

      <Timer />
      <TaskList />
    </div>
  );
};

export default App;

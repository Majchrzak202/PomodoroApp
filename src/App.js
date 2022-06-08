import React from "react";
import Navbar from "./Components/UI/Navbar";
import Timer from "./Components/Timer/Timer";
import TaskList from "./Components/Tasks/TaskList";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Timer/>
      <TaskList/>
     
    </div>
  );
}

export default App;

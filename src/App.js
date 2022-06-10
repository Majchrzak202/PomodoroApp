import React, { /* useState, useEffect */ } from "react";
import Navbar from "./Components/UI/Navbar";
import Timer from "./Components/Timer/Timer";
import TaskList from "./Components/Tasks/TaskList";
import MyTimer from "./MyTImer";

const App = () => {
  

  return (
    <div className="App">
      <Navbar />
      
     <MyTimer/>
      <Timer />
      <TaskList />
    </div>
  );
};

export default App;

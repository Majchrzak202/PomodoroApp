import React from "react";
import "./TaskList.css";
import Task from "./Task";

const TaskList = () => {
  return (
    <div className="task-section">
      <div className="task-container">
        <div className="task-text">
          <h4>Tasks</h4>
        </div>
        <ul>
          <Task />
          <Task />
          <Task />
        </ul>
        <button>Add task</button>
      </div>
    </div>
  );
};

export default TaskList;

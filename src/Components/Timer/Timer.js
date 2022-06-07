import React from "react";
import './Timer.css'

const Timer = () => {
  return <div className="timer-section">
      <div className='timer-container'>
          <div className="timer-button-control" >
              <button>Pomodoro</button>
              <button>Short Brake</button>
              <button>Long Brake</button>
          </div>
          <div className="timer-display-control">
              <h1>25:00</h1>
          </div>
          <div className="timer-start-control">
              <button>START</button>
          </div>
      </div>
  </div>;
};

export default Timer;

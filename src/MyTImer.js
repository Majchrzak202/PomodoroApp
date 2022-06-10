import React, { useState, useEffect } from "react";

const MyTimer = () => {
  const [time, setTime] = useState(5);
  const [timerOn, setTimerOn] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      clearInterval(interval);
      setTime(5);
      setTimerOn(false);
    }

    return () => clearInterval(interval);
  }, [timerOn, time]);

  const resetHandler = () => {
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div>
      <div>{time}</div>
      <div>
        <button onClick={() => setTimerOn(true)}>START</button>
        <button onClick={() => setTimerOn(false)}>STOP</button>
        <button onClick={() => setTimerOn(true)}>RESUME</button>
        <button onClick={resetHandler}>RESET</button>
      </div>
    </div>
  );
};

export default MyTimer;

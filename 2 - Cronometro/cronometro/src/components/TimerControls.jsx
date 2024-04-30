import React from "react";

const TimerControls = ({ onStart, onStop, onReset, onLap, timerOn }) => {
  return (
    <div className="timer-controls">
      {!timerOn && <button onClick={onStart}>Iniciar</button>}
      {timerOn && <button onClick={onStop}>Parar</button>}
      {timerOn && <button onClick={onLap}>Volta</button>}
      <button onClick={onReset}>Zerar</button>
    </div>
  );
};

export default TimerControls;

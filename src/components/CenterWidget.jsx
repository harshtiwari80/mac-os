import React, { useEffect, useState } from "react";
import "./center.scss";

const CenterWidget = ({ setWindowsState }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="center-widget">
      <h1>{time.toLocaleTimeString()}</h1>
      <p>{time.toDateString()}</p>

      <div className="center-buttons">
        <button onClick={() => setWindowsState(prev => ({...prev, about:true}))}>
          About
        </button>
        <button onClick={() => setWindowsState(prev => ({...prev, projects:true}))}>
          Projects
        </button>
        <button onClick={() => setWindowsState(prev => ({...prev, terminal:true}))}>
          Terminal
        </button>
      </div>
    </div>
  );
};

export default CenterWidget;
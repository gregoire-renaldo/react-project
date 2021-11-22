import React from "react";
import "./ChartBar.css";

const chartBar = (props) => {
  let barFilHeight = '0%';

  if (props.maxValue > 0) {
    barFilHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* style wants an object  {{backgroundColo: 'red}}*/}
        <div className="chart-bar__fill" style={{ height: barFilHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default chartBar;

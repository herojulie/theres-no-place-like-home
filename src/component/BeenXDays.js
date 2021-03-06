import React from 'react';
import '../css/DefaultComponent.css';

const getElapsedDays = () => {
  let start = new Date("06/08/2020").getTime();
  let today = Date.now();

  return Math.floor((today - start) / (24 * 60 * 60 * 1000));
};

const beenXDays = () => {
  let elapsed = getElapsedDays()

  return (
    <div className="defaultComponent">
      <h1>{elapsed} days</h1>
      <p>!Drinking</p>
    </div>
  )
};

export default beenXDays

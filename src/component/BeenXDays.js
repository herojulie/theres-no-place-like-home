import React from 'react';
import '../css/BeenXDays.css';

const getElapsedDays = () => {
  let start = new Date("10/06/2019").getTime();
  let today = Date.now();

  return Math.floor((today - start) / (24 * 60 * 60 * 1000));
}

const beenXDays = () => {
  let elapsed = getElapsedDays()

  return (
    <div className="beenXDays">
      <h1>{elapsed} days</h1> 
      <p>since I stopped drinking. Way to go ME!</p>
    </div>
  )
};

export default beenXDays
import React from 'react';

const CounterButtons = ( {increaseCounter, decreaseCounter, resetCounter}) => (
  <div>
    <button onClick={increaseCounter}>+1</button>
    <button onClick={decreaseCounter}>-1</button>
    <button onClick={resetCounter}>Reset</button>
  </div>
);

export default CounterButtons;
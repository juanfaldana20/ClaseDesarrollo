
import React from 'react';
import useCounter from './useCounter';

const ComponentApp=()=> {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
        <h1>Challenge counter </h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default ComponentApp;
import React, { useState } from 'react';
import './App.css';

function App() {
  // Define a state variable for the counter
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter App using React Hooks</h1>
      <p>Count: {count}</p>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default App;


// npx create-react-app counter
// cd counter
//  npm start
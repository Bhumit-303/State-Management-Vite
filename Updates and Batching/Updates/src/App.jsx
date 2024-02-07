import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
// The setCount function provided by useState is asynchronous. When it's called, React schedules the state update but doesn't immediately execute it. Instead, React batches multiple state updates together for performance reasons. Therefore, the console.log(count) statement gets executed before the state update is actually applied, resulting in the log displaying the older value of count.
function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App


// import React from 'react'

// // Your task is to explain why count value is not updated to 3 as expected
// function App() {
//   const [count, setCount] = React.useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
// 		console.log(count);
//   };

//   return (
//     <div>
//       <p>Button is clicked {count} times</p>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App

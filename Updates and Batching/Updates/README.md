# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Understanding State Management and useState Hook in React
# Code 1: Delayed State Update
In this code snippet, the useState hook is utilized to manage a state variable count, initialized with the value of 0. The handleClick function is triggered when the button is clicked, attempting to increment the count state by one. However, the issue arises when logging the count immediately after invoking setCount.

Explanation:
The setCount function provided by useState is asynchronous. When it's called, React schedules the state update but doesn't immediately execute it. Instead, React batches multiple state updates together for performance reasons. Therefore, the console.log(count) statement gets executed before the state update is actually applied, resulting in the log displaying the older value of count.

Solution:
To log the updated value of count, you can utilize the callback function provided by setCount. This function receives the updated state value as its argument and can be used to perform actions after the state has been updated.


# Code 2: Multiple State Updates
In this code snippet, setCount is called multiple times within the handleClick function to increment the count state by one thrice. However, the result is unexpected, as the count value does not become 3 as anticipated.

Explanation:
Similar to the first code snippet, the issue here also stems from the asynchronous nature of setCount and React's batching mechanism. When setCount is called multiple times consecutively, React does not perform the updates immediately but instead batches them together. Therefore, each call to setCount is based on the initial value of count (which is 0), resulting in count being incremented only once.

Approach:
To ensure that each call to setCount is based on the latest value of count, you can utilize the functional form of setCount, which accepts a callback function. This function receives the previous state as its argument, allowing you to safely update the state based on the previous value.
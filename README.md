# State-Management-Vite
### Summary
- `setCount` is asynchronous because React batches updates and schedules re-rendering for later, not immediately.
- This behavior is part of React's design to optimize performance.
- Always be mindful of this when working with state updates, especially when they are sequential or dependent on the previous state.
- In scenarios where you need to perform multiple state updates based on the previous state value, always use the functional form of the state updater function (`prevCount => prevCount + 1`). This ensures that each update is applied sequentially and accurately, respecting React's asynchronous state update mechanism.

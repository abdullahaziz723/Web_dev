import { useState } from "react";
const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>Counter :{count}</h1>
      <button onClick={() => setcount(count + 1)}>click me</button>
    </div>
  );
}

export default Counter;

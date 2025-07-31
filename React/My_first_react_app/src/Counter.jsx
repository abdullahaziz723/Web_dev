import { useState } from "react";
const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>Counter :{count}</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        deleniti labore. Quos maxime sapiente rerum laboriosam alias cum
        laudantium fugiat.
      </h2>
      <button onClick={() => setcount(count + 1)}>click me</button>
    </div>
  );
};

export default Counter;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const min = 0;
  const max = 10;

  const increase = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };
  const decrease = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  const addvValue =()=>
  {
    setCount(prevcounter=> prevcounter + 1)
    setCount(prevcounter=> prevcounter + 1)
    setCount(prevcounter=> prevcounter + 1)
    setCount(prevcounter=> prevcounter + 1)};
  

  return (
    <>
      <h1>chai and react :{count} </h1>
      <button onClick={addvValue}>add value</button>
      <br />
      <br />
      <button onClick={decrease}>remove value</button>
    </>
  );
}

export default App;

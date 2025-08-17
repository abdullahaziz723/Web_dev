import { useState, useCallback } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [Password, setpassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabdcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (symbol) str += "!@#$%^&[]()";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random * str.length + 1);
      pass = str.charAt(char);
    }

    setpassword(pass);
  }, [length, number, symbol, setpassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md  rounded-lg px-4 my-20 py-3 text-orange-400  bg-gray-800">
        <h1 className="text-white text-center">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0" >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2" >
          <div className="flex items-center gap-x-2">
            <input type="range"
            min={8}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length:{length}</label>

          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={number}
            id="input number"
            onChange={()=>{
              setNumber((prev)=>!prev);
            }}/>
            <label htmlFor="numberInput">Numbers</label>

          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={symbol}
            id="input symbol"
            onChange={()=>{
              setSymbol((prev)=>!prev);
            }}/>
            <label htmlFor="symbolInput">Symbol</label>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;

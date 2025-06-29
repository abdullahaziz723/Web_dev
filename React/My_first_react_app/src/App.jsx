import Counter from "./Counter";
import  User  from "./components";
import { useState } from "react";

function App(){
  // This is a simple React component that renders a heading
  // It does not use any state or props, just a static heading
  const[display, setDisplay] = useState(true);
    const [val,setval]=useState("")

  let object1={
      name : "John",
      age: 30,
      city: "New York"
    } 
     let object2={
      name : "peter",
      age: 30,
      city: "New York"
    } 
  return (
    <div>
       {/* <User user={object1}/> 
       <User user={object2}/>  */}


      
       <h1>Get the field value</h1>
       <input type="text" value={val} onChange={(Event)=>setval(Event.target.value)}  placeholder="text inoput here" />
        <h1>{val}</h1>
        <button onClick={()=>setval("")} >clear</button>
 

      {
        // display ? <h1>this is true</h1>: <h1>this is false</h1>
      } 

      {/* <button onClick={()=>setDisplay(!display)} >Toggle</button> */}
    {/* <Counter /> */}
   
    </div>
  )
}

export default App;
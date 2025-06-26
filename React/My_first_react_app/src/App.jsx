import React, { Profiler } from 'react';
import './App.css'
import Profile, {Key, Profile2} from './components.jsx';

function apple(){
  return (

    <div>
       <h1>hello  key {Key} world</h1>
    <h1>sdasdasda</h1>
    <Profile></Profile>
    <Profile2 />
  
    </div>
  )
}

export default apple;
// This is a simple React component that returns a header element with the text "hello world".
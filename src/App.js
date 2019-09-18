import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calender from "./calender/calender.js"
function demo(e)
{
  console.log(e.target.id);
}
function App() {

  return (
    <div>
    <Calender name="text-info" bg="bg-primary text-white" fun={demo}/>
    </div>
  );
}

export default App;

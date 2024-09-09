import React, { useState } from 'react'

function UseState() {
   // let score = 0;

   let [score,setScore]= useState(0)
   let[balls,setBalls] = useState(0);
   let[double,setDouble] = useState(0);
   let[four,setFours]  =useState(0);
   let [six,setSixes]  = useState(0);
   let[nob,NoBall]  = useState(0);
   let [wicket,Wickets] = useState(0);
  return (
    <div>
      <h1>Score:{score}</h1>
      <h1>Overs:{balls}</h1>
      <h1>Double:{double}</h1>
      <h1>Four:{four}</h1>
      <h1>Six :{six}</h1>
      <h1>NoBall:{nob}</h1>
    <h1>Wickets:{wicket}</h1>
      <button onClick={()=>{
        setScore(score +1);
        setBalls(balls +1);
     
      }}>Single</button>
      <button onClick={()=>{
        setScore(score +2);
        setBalls(balls +2);
        setDouble(double +1);
      }}>Double</button>
      <button onClick={()=>{
        setScore(score +2);
        setBalls(balls +2);
        setFours(double +1);
      }}>Fours</button>
      <button onClick={()=>{
        setScore(score +6);
        setBalls(balls +1);
        setSixes(double +1);
      }}>Sixes</button>
      <button onClick={()=>{
        setScore(score +2);
        setBalls(balls +2);
        setDouble(double +1);
      }}>NoBall</button>
      <button onClick={()=>{
        setScore(score +2);
        setBalls(balls +2);
        setDouble(double +1);
      }}>Wicket</button>
    </div>
  )
}

export default UseState

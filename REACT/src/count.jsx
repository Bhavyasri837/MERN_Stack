import React from 'react'
import "./Parent" from './Parent.jsx'
import { useState,useEffect } from 'react'

export default function count() {
    const [count,setCount] = useState(0)
    const[mobile,setMobile] = useState("")    
    const[lunch,setLunch]= useState("");
    useEffect(()=>{
        document.title = `you clicked ${count} times`
    },[count]
);
  return (
    <div>
      <h1 className="count">count:{count}</h1>

      <div className="counting">
        <button onClick={()=>setCount(count+1)}>
            +1
        </button>
        <button onClick={()=>setCount(count-1)}>
            -1
        </button>
        <button onClick={()=>setCount(0)}>
            reset
        </button>
      </div>

      <h2>lunch:{lunch?"yes":"no"}</h2>
      <button onClick={()=>setLunch(!lunch)}>lunch</button>
    
        <h2>phone:{mobile?"android":"iphone"}</h2>
        <button onClick={()=>setMobile(!mobile)}>buy</button>

</div>

  );
}

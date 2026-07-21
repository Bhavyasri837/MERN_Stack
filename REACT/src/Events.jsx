import React,{useState} from 'react'


import lightOn from "./assets/lighton.png";
import lightOff from "./assets/lightoff.png";

export default function Events() {
    const [image, setImage] = useState(lightOff);

function press(e)
{
alert("key pressed "+e.key);    
}
  return (
    <div>
      <div>
        <button onMouseOver={() => alert("Mouse Over")}>Mouse Over</button><br/>
        <button onMouseOut={() => alert("Mouse Out")}>Mouse Out</button><br/>
        <button onMouseEnter={() => alert("Mouse Enter")}>Mouse Enter</button><br/>
        <button onMouseLeave={() => alert("Mouse Leave")}>Mouse Leave</button><br/>
        <button onClick={() => alert("Button Clicked")}>Click Me</button>

      </div>
      <input onKeyDown={press}/>
      <input onFocus={()=>alert("input focused")}
      onBlur={()=>alert("input blurred")}/>
      <br/>


      
       <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Light On / Off</h2>

      <img
        src={image}
        alt="Light"
        width="200"
        height="300"
      />

      <br /><br />

      <button onClick={() => setImage(lightOn)}>
        ON
      </button>

      <button
        onClick={() => setImage(lightOff)}
        style={{ marginLeft: "10px" }}
      >
        OFF
      </button>
    </div>
    </div>
    
  )
}

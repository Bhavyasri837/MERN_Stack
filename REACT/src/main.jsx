// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import JSX from './components.jsx'
// import Forms from './Forms.jsx'
// import Events from './Events.jsx'
// import API from './Api.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <JSX />
//     <Forms/>
//     <Events/>
//     <API/>
//   </StrictMode>,
// )
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import API from "./API.jsx";
import DB_connect from "./DB_connect.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <API /> */}
<DB_connect/>
  </StrictMode>
);
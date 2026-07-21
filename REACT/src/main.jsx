import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JSX from './components.jsx'
import Forms from './Forms.jsx'
import Events from './Events.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JSX />
    <Forms/>
    <Events/>
  </StrictMode>,
)

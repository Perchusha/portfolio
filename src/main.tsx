import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('%c👋 Hey, fellow dev!', 'font: 700 18px Manrope, sans-serif; color: #2563eb')
console.log(
  "Peeking under the hood? The source is at https://github.com/Perchusha/portfolio\nLet's talk: perch.anton@gmail.com",
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

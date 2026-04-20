import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/layout/Navbar.tsx'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
    <App />
    </BrowserRouter>
  </StrictMode>,
)

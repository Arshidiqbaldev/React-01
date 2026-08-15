import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <App />

)

createRoot(document.getElementById('header')).render(
  <Navbar />

)
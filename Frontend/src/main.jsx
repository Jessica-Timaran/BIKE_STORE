import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Catalogo from './assets/components/Catalogo.jsx'
import Navbar from './assets/components/Navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>,
)

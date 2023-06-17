import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './components.css'

const rootElement = document.getElementById('app');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

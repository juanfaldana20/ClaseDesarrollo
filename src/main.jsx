import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import './index.css'
import FirstApp from './FirstApp'
import { ComponentApp } from './ComponentApp'



function App() {
  return <h1>Hola mundo </h1>
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComponentApp/>
  </React.StrictMode>,
)

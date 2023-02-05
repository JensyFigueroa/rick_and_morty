import React from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'

/* ReactDOM.render(
  <App />, document.getElementById('root')
) */

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />, 
  </BrowserRouter>
)

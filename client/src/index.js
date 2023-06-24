import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { AuthContextWrapper } from './context/auth.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AuthContextWrapper>
    <Router>
      <App />
    </Router>
  </AuthContextWrapper>
)

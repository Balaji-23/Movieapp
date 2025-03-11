import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Scrolltop from './components/Scrolltop.jsx'

createRoot(document.getElementById('root')).render(
  
<BrowserRouter>
<Scrolltop/>
<App />
</BrowserRouter>
  

)

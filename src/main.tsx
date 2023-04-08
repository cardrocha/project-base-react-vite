import React from 'react'
import ReactDOM from 'react-dom/client'
import EstiloGlobal from './styles'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EstiloGlobal />
    <App />
  </React.StrictMode>
)

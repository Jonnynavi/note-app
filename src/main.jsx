import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './context/note.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)

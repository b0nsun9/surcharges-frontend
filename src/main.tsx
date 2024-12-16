import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@app/ui'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
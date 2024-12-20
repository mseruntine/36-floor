import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing from './Landing.tsx'
import { Provider } from "./components/ui/provider";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Landing />
    </Provider>
  </StrictMode>,
)

import React from 'react'
import { Routing } from './Routing'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { MainContext, MainContextData } from './context'

import './global.css'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const [mainState, setState] = React.useState<MainContextData>({
    loading: true,
  })
  return (
    <MainContext.Provider value={{ ...mainState, update: setState }}>
      <React.StrictMode>
        <CssBaseline />
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </React.StrictMode>
    </MainContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)

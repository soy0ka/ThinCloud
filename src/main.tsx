import React from 'react'
import { Routing } from './Routing'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { MainContext, MainContextData } from './context'

import './global.css'
import 'react-toastify/dist/ReactToastify.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { ko } from 'date-fns/locale/ko'

export default function App() {
  const [mainState, setState] = React.useState<MainContextData>({
    loading: true,
  })
  return (
    <MainContext.Provider value={{ ...mainState, update: setState }}>
      <React.StrictMode>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
          <CssBaseline />
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </LocalizationProvider>
      </React.StrictMode>
    </MainContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)

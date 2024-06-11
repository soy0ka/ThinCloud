import React from 'react'
import { fetcher } from './util'
import { Routing } from './Routing'
import { toast } from 'react-toastify'
import ReactDOM from 'react-dom/client'
import { getCookie } from 'react-use-cookie'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { MainContext, MainContextData } from './context'

import './global.css'
import 'react-toastify/dist/ReactToastify.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { ko } from 'date-fns/locale/ko'

export default function App() {
  const Authorization = getCookie('Authorization')
  const [mainState, setState] = React.useState<MainContextData>({
    user: null,
    loading: true,
  })

  React.useEffect(() => {
    setState((prev) => ({ ...prev, loading: true }))
    if (Authorization) {
      fetcher('/auth/me')
        .then((res) => {
          if (res.message === 'Banned') {
            return toast.error('이용이 제한된 계정입니다')
          }
          if (!res.success)
            return setState((prev) => ({ ...prev, user: null, loading: false }))
          setState((prev) => ({ ...prev, user: res.body, loading: false }))
        })
        .catch(() => {
          setState((prev) => ({ ...prev, user: null, loading: false }))
        })
    }
  }, [Authorization])

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

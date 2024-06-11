import { useContext, createContext } from 'react'

export interface MainContextData {
  loading: boolean
}

export const MainContext = createContext<{
  loading: MainContextData['loading']
  update: (cb: (data: MainContextData) => MainContextData) => void
}>({
  loading: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  update: () => {},
})

export const useMainContext = () => useContext(MainContext)

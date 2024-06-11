import { User } from '~/types'
import { useContext, createContext } from 'react'

export interface MainContextData {
  user: User | null
  loading: boolean
}

export const MainContext = createContext<{
  user: MainContextData['user']
  loading: MainContextData['loading']
  update: (cb: (data: MainContextData) => MainContextData) => void
}>({
  user: null,
  loading: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  update: () => {},
})

export const useMainContext = () => useContext(MainContext)

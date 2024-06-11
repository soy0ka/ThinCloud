import Axios from 'axios'
import {
  initializeAppCheck,
  getToken,
  ReCaptchaV3Provider,
} from 'firebase/app-check'
import { app } from '~/service/firebase'

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_SITE_KEY),
  isTokenAutoRefreshEnabled: true,
})

const getHeader = async () => {
  const appCheckTokenResponse = await getToken(appCheck, false)
  return {
    'X-Firebase-AppCheck': appCheckTokenResponse.token,
  }
}

export const api = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
})

export const fetcher = async (url: string) => {
  try {
    const { data } = await api.get(url, { headers: await getHeader() })
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error.response?.data
  }
}

export const postFetcher = async (url: string, body: object) => {
  try {
    const { data } = await api.post(url, body, { headers: await getHeader() })
    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error.response?.data
  }
}

export const apiUrl = (path: string) =>
  `${import.meta.env.VITE_API_BASE}${path}`

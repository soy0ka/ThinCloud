import { JSEncrypt } from 'jsencrypt'

const encrypt = new JSEncrypt()
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

encrypt.setPublicKey(PUBLIC_KEY || '')

export const rsaEncrypt = (data: string) => {
  return encrypt.encrypt(data)
}

import { LocalStorage } from '@/core/constants'
import { IAuthStore } from '@/core/types/auth.types'

export const getStorage = (key: string) => {
  return window.localStorage.getItem(key)
}

export const getParsedStorage = (key: LocalStorage) => {
  const value = window.localStorage.getItem(key)
  try {
    if (value) {
      const parsedStorage = JSON.parse(value)
      return parsedStorage
    }
    return null
  } catch (error) {
    return null
  }
}

export const setStorage = (key: LocalStorage, data: string) => {
  window.localStorage.setItem(key, data)
}

export const getAuthFromStorage = (): IAuthStore | null => {
  return getParsedStorage(LocalStorage.AUTH)
}

export const clearStorage = () => {
  window.localStorage.clear()
}

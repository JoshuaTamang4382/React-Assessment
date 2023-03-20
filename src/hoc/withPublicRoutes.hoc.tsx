import { getAuthFromStorage } from '@/core/utils'
import React from 'react'
import { Navigate } from 'react-router-dom'

export const withPublicRoutes = (Component: React.FC) => {
  return (props: any) => {
    const auth = getAuthFromStorage()
    return auth?.email && auth?.refreshToken && auth?.xs ? (
      <Navigate to='/' />
    ) : (
      <Component {...props} />
    )
  }
}

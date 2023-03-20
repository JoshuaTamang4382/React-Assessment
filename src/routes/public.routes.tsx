import React, { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Login = lazy(() => import('@/pages/Login'))

export const publicRoutes: RouteObject[] = [
  {
    path: 'login',
    element: <Login />,
  },
]

import PrivateLayout from '@/core/components/PrivateLayout'
import { RouteObject } from 'react-router-dom'
import React, { lazy } from 'react'

const Dashboard = lazy(() => import('@/pages/Dashboard'))

export const protectedRoutes: RouteObject[] = [
  {
    element: <PrivateLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
]

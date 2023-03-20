import PageNotFound from '@/pages/PageNotFound'
import { createBrowserRouter } from 'react-router-dom'
import { protectedRoutes } from './protected.routes'
import { publicRoutes } from './public.routes'

const routesList = publicRoutes.concat(protectedRoutes)

export const routes = createBrowserRouter([...routesList, { path: '*', element: <PageNotFound /> }])

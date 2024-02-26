import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { makeHomeScreenFactory } from '@/application/factories/screens/Home/HomeScreenFactory'

const appRoutes: RouteObject[] = [
  {
    element: makeHomeScreenFactory(),
    path: '/'
  }
]

export const router = createBrowserRouter(appRoutes)

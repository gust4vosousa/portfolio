import { RouterProvider } from 'react-router-dom'
import { router } from './application/routes/Routes'
import { AppProvider } from './presentation/components/Providers/App/AppProvider'

export const App: React.FC = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

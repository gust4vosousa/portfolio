import React from 'react'

import { IAppProps } from '@/presentation/components/Providers/App/AppProvider.types'
import { CssBaseline, ThemeProvider, useTheme } from '@mui/material'

export const AppProvider: React.FC<IAppProps> = ({ children }) => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

import React from 'react'

import { ColorModeContext } from '@/application/contexts/ColorMode/ColorModeContext'
import { useColorModeContextRules } from '@/application/contexts/ColorMode/ColorModeContext.rules'
import { IAppProps } from '@/presentation/components/Providers/App/AppProvider.types'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

export const AppProvider: React.FC<IAppProps> = ({ children }) => {
  const { colorModeContextValue, currentColorMode } = useColorModeContextRules()

  const theme = createTheme({
    palette: {
      mode: currentColorMode
    }
  })

  return (
    <ColorModeContext.Provider value={colorModeContextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

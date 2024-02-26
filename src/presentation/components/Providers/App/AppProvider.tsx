import { CssBaseline, ThemeProvider, useTheme } from '@mui/material'
import { IAppProps } from './AppProvider.types'

export const AppProvider: React.FC<IAppProps> = ({ children }) => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

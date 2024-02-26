import React from 'react'

import { useColorModeContext } from '@/application/contexts/ColorMode/ColorModeContext'
import { useHeaderComponentStyles } from '@/presentation/components/Navigation/Header/HeaderComponent.styles'
import { AppBar, Button, Toolbar } from '@mui/material'

export const HeaderComponent: React.FC = () => {
  const { toggleColorMode } = useColorModeContext()
  const classes = useHeaderComponentStyles()

  return (
    <AppBar enableColorOnDark position="static">
      <Toolbar className={classes.container}>
        {"Gustavo's Portfolio"} <Button onClick={toggleColorMode}>Color</Button>
      </Toolbar>
    </AppBar>
  )
}

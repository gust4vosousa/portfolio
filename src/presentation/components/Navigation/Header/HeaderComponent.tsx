import React from 'react'

import { AppBar, Toolbar } from '@mui/material'

export const HeaderComponent: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>{"Gustavo's Portfolio"}</Toolbar>
    </AppBar>
  )
}

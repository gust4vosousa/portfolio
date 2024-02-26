import React from 'react'

import { HeaderComponent } from '@/presentation/components/Navigation/Header/HeaderComponent'
import { IScreenProps } from '@/presentation/components/Providers/Screen/ScreenProvider.types'
import { Box } from '@mui/material'

export const ScreenProvider: React.FC<IScreenProps> = ({ children }) => {
  return (
    <Box>
      <HeaderComponent />
      {children}
    </Box>
  )
}

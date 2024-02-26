import React, { Fragment } from 'react'

import { HeaderComponent } from '@/presentation/components/Navigation/Header/HeaderComponent'
import { IScreenProps } from '@/presentation/components/Providers/Screen/ScreenProvider.types'

export const ScreenProvider: React.FC<IScreenProps> = ({ children }) => {
  return (
    <Fragment>
      <HeaderComponent />
      {children}
    </Fragment>
  )
}

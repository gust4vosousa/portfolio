import { Fragment } from 'react'
import { HeaderComponent } from '../../Navigation/Header/HeaderComponent'
import { IScreenProps } from './ScreenProvider.types'

export const ScreenProvider: React.FC<IScreenProps> = ({ children }) => {
  return (
    <Fragment>
      <HeaderComponent />
      {children}
    </Fragment>
  )
}

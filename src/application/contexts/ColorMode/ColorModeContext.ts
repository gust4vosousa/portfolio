import { createContext, useContext } from 'react'

import {
  EColorModes,
  IColorModeContext
} from '@/application/contexts/ColorMode/ColorModeContext.types'

export const ColorModeContext = createContext<IColorModeContext>({
  currentColorMode: EColorModes.dark,
  toggleColorMode: () => null
})

export const useColorModeContext = (): IColorModeContext => useContext(ColorModeContext)

import { useMemo, useState } from 'react'

import {
  EColorModes,
  IColorModeContext
} from '@/application/contexts/ColorMode/ColorModeContext.types'
import { PaletteMode } from '@mui/material'

export const useColorModeContextRules = () => {
  const [currentColorMode, setCurrentColorMode] = useState<PaletteMode>(EColorModes.dark)

  const toggleColorMode = () => {
    setCurrentColorMode((prev) =>
      prev === EColorModes.dark ? EColorModes.light : EColorModes.dark
    )
  }

  const colorModeContextValue = useMemo<IColorModeContext>(
    () => ({
      currentColorMode,
      toggleColorMode
    }),
    [currentColorMode]
  )

  return { colorModeContextValue, currentColorMode }
}

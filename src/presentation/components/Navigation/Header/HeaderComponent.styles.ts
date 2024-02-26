import { useCreateStylesHook } from '@/presentation/hooks/UseCreateStyles/UseCreateStylesHook'

export const useHeaderComponentStyles = useCreateStylesHook({
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

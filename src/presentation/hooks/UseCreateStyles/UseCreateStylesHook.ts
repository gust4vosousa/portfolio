import { StyleRules, createStyles, makeStyles } from '@mui/styles'

export const useCreateStylesHook = (styles: StyleRules<{}, string>) =>
  makeStyles(() => createStyles(styles))

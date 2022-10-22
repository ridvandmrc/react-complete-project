import { createTheme } from '@mui/material'

export const DefaultTheme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1060, xl: 1536 },
  },
  palette: { primary: { main: '#212121' }, secondary: { main: '#7ab730' } },
})

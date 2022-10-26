import { createTheme } from '@mui/material'

export const DefaultTheme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1060, xl: 1536 },
  },
  palette: {
    primary: { main: '#212121', '100': '#656565' },
    secondary: { main: '#7ab730' },
    grey: { '900': '#f3f3f3' },
  },
  components: {
    MuiCircularProgress: {
      defaultProps: {
        style: {
          width: '100px',
          height: '100px',
        },
      },
      styleOverrides: {
        root: {
          color: '#1976d2',
        },
      },
    },
  },
})

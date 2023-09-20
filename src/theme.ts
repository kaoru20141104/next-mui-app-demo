import { createTheme } from '@mui/material/styles';

// ここで必要なテーマカスタマイズを行います
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export { theme };
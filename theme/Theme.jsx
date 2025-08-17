import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#34a1f1',
      dark: '#2682c5',
      light: '#5ab4f3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f1a134',
      contrastText: '#ffffff',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
    background: {
      default: '#f5faff',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    DataGrid: {
  
      bg: '#ffffff',
      pinnedBg: '#ffffff',
      headerBg: '#f0f5ff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          padding: '8px 16px',
          ':focus-visible': {
            outline: '2px solid #2682c5',
            outlineOffset: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 12,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '16px',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 8,
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#f0f5ff',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 600,
          color: '#212121',
        },
        body: {
          color: '#212121',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 8,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 8,
        },
        input: {
          color: '#212121',
          padding: '12px',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          '& .MuiDataGrid-row:nth-of-type(odd)': {
            backgroundColor: '#f5f5f5',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: '#e3f2fd',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: '#1976d2',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#34a1f1',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2682c5',
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          '&:hover': {
            backgroundColor: '#f5faff',
          },
          '&.Mui-focused': {
            backgroundColor: '#ffffff',
            borderColor: '#2682c5',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#757575',
          '&.Mui-focused': {
            color: '#2682c5',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
import { createTheme, outlinedInputClasses } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#215250',
    },
    secondary: {
      main: '#CD7A47',
      light: '#EB833D',
    },
    error: {
      main: '#BF2600',
      dark: '#98280C',
      contrastText: '#FFF',
    },
    info: {
      main: '#1E3C3C',
    },
    success: {
      main: '#3E8D90',
    },
    background: {
      default: '#FFF',
    },
    text: {
      primary: '#0B0B0B',
      secondary: '#808080',
      disabled: '#4A4A4A',
    },
  },

  mixins: {
    toolbar: {
      minHeight: 56,
    },
  },

  typography: {
    fontFamily: ['RNS Sanz', 'sans-serif'].join(','),
    h1: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 'inherit',
    },
    h2: {
      fontSize: '24px',
      lineHeight: '34px',
      fontWeight: 'inherit',
    },
    h5: {
      fontWeight: 'inherit',
    },
    body1: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 'inherit',
    },
    body2: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 'inherit',
    },
    caption: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 'inherit',
    },
    subtitle1: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 'inherit',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  // @TODO: why use !important?
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#FFF',
          // Keep old body typography
          fontSize: '0.875rem',
          lineHeight: 1.43,
          letterSpacing: 0,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        outlined: {
          borderRadius: '4px',
          boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.04)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        margin: 'normal',
        fullWidth: true,
        size: 'small',
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: '40px',
        },
        multiline: {
          height: 'auto',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        marginDense: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0 !important',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderWidth: '2px',
            borderRadius: '4px',
            borderColor: '#E5E5E5',
          },
          '&.Mui-disabled': {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: '#E5E5E5',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          lineHeight: '24px',
          padding: '8px 12px',
          height: '40px',
          fontSize: '16px',
          minWidth: 'auto',
        },
        outlined: {
          border: '2px solid #215250',
          color: '#215250',
          padding: '10px 12px',

          '&:hover': {
            border: '2px solid #215250',
          },
        },
        contained: {
          boxShadow: 'none',

          ':hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: '44px',
        },
      },
    },
    // MuiFormHelperText: {
    //   styleOverrides: {
    //     root: {
    //       margin: '0 !important',
    //     },
    //   },
    // },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  },

  // Keep old breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

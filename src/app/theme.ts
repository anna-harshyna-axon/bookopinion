import { createTheme, outlinedInputClasses } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#85CDEC',
    },
    secondary: {
      main: '#F6A975',
    },
    // error: {
    //   main: '#BF2600',
    //   dark: '#98280C',
    //   contrastText: '#FFF',
    // },
    // info: {
    //   main: '#1E3C3C',
    // },
    // success: {
    //   main: '#3E8D90',
    // },
    // background: {
    //   default: '#FFF',
    // },
    text: {
      primary: '#000',
      secondary: '#FFF',
      disabled: '#E5E5E5',
    },
  },

  mixins: {
    toolbar: {
      minHeight: 56,
    },
  },

  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
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
          borderRadius: '50px',
          lineHeight: '24px',
          padding: '36px 50px',
          height: '40px',
          fontSize: '16px',
          minWidth: 'auto',
          color: '#FFF',
        },
        sizeSmall: {
          height: '78px',
          width: '110px',
        },
        sizeLarge: {
          height: '96px',
          width: '394pxx',
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

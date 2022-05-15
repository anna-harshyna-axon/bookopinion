import {
  FormControl as MuiFormControl,
  FormHelperText,
  InputLabel,
} from '@mui/material'
import { forwardRef } from 'react'

export type FormControlProps = {
  children: React.ReactNode
  htmlFor?: string
  label?: string
  helperText?: React.ReactNode
  error?: boolean
  required?: boolean
}

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  (props: FormControlProps, ref) => {
    return (
      <MuiFormControl
        fullWidth
        required={props.required}
        ref={ref}
        margin="none"
      >
        {props.label && (
          <InputLabel
            error={props.error}
            disableAnimation
            shrink
            htmlFor={props.htmlFor}
            required={props.required}
            sx={{
              transform: 'none',
              typography: 'caption',
              color: 'text.primary',
              mb: 0.5,
              ml: 0.5,
              position: 'static',
            }}
          >
            {props.label}
          </InputLabel>
        )}

        {props.children}

        {props.helperText && (
          <FormHelperText
            error={props.error}
            sx={{ ml: 0, mt: 1, display: 'flex', alignItems: 'center' }}
          >
            {props.helperText}
          </FormHelperText>
        )}
      </MuiFormControl>
    )
  },
)

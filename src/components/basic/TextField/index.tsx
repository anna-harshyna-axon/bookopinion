import { TextField as MuiTextField, TextFieldProps } from '@mui/material'
import { FormControl, FormControlProps } from 'components/form/FormControl'

type Props = Omit<FormControlProps, 'children'> & TextFieldProps

export const TextField = ({
  htmlFor,
  label,
  error,
  helperText,
  required,
  ...textFieldProps
}: Props) => {
  return (
    <FormControl
      htmlFor={htmlFor}
      label={label}
      error={error}
      helperText={helperText}
      required={required}
    >
      <MuiTextField {...textFieldProps} error={error} margin="dense" />
    </FormControl>
  )
}

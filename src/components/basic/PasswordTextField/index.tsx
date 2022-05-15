import { InputAdornment, TextField, TextFieldProps } from '@mui/material'
import { useBoolean } from 'hooks/use-boolean'

import { ToggleVisibilityButton } from './components/ToggleVisibilityButton'

type Props = TextFieldProps

export const PasswordTextField = (props: Props) => {
  const visibility = useBoolean(false)

  return (
    <TextField
      label={props.label}
      error={props.error}
      helperText={props.helperText}
      type={visibility.isTrue ? 'text' : 'password'}
      autoComplete={props.autoComplete}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      required={props.required}
      margin={props.margin || 'normal'}
      placeholder={props.placeholder || ''}
      InputProps={{
        required: true,
        endAdornment: (
          <InputAdornment position="end">
            <ToggleVisibilityButton
              isVisible={visibility.isTrue}
              onClick={visibility.toggle}
            />
          </InputAdornment>
        ),
      }}
    />
  )
}

import { ErrorHelperText } from 'components/form/ErrorHelperText'
import { FieldError } from 'react-hook-form'

export const textFieldError = (error?: FieldError) => {
  return error?.message
    ? { error: true, helperText: <ErrorHelperText msg={error.message} /> }
    : {}
}

import { gql, useMutation } from '@apollo/client'
import { Box, Button, Divider, Typography } from '@mui/material'
import { TextField } from 'components/basic/TextField'
import { AUTH_TOKEN } from 'constants.js'
import { textFieldError } from 'lib/textFieldError'
import {
  emailValidation,
  maxLength,
  minLength,
  nameValidation,
  passwordValidation,
  required,
} from 'lib/validations.ts'
import { useSnackbar } from 'notistack'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type FormValues = {
  name: string
  email: string
  password: string
}

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const Signup = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const [signup, { error }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup.token)
      navigate('/')
      enqueueSnackbar('Вас успішно pареєстровано', { variant: 'success' })
    },
  })

  if (error) enqueueSnackbar(error.message, { variant: 'error' })

  return (
    <Box
      pt={6}
      component="section"
      display="flex"
      justifyContent="center"
      width="100%"
      height="600px"
    >
      <Box maxWidth="340px">
        <Typography
          textAlign="center"
          mb={3}
          variant="h1"
          fontWeight="600"
          color="secondary.main"
        >
           Реєстрація
        </Typography>
        <Divider />
        <form
          noValidate
          onSubmit={handleSubmit(values => {
            signup({
              variables: {
                name: values.name,
                email: values.email,
                password: values.password,
              },
            })
          })}
        >
          <Box mt={6} mb={2}>
            <Controller
              name="name"
              control={control}
              rules={{
                ...required,
                // ...nameValidation,
                minLength: minLength(2, 'Ім`я має бути не менше 2 символів'),
              }}
              render={({ field, fieldState }) => (
                <TextField
                  label="Ім'я"
                  required
                  margin="dense"
                  inputProps={{ maxLength: 20 }}
                  placeholder="Введіть ім'я"
                  {...textFieldError(fieldState.error)}
                  {...field}
                />
              )}
            />
          </Box>

          <Box mb={2}>
            <Controller
              name="email"
              control={control}
              rules={{
                ...emailValidation,
              }}
              render={({ field, fieldState }) => (
                <TextField
                  label="Ел. пошта"
                  required
                  margin="dense"
                  placeholder="Введіть адресу електроної пошти"
                  {...textFieldError(fieldState.error)}
                  {...field}
                />
              )}
            />
          </Box>

          <Controller
            name="password"
            control={control}
            rules={{
              ...passwordValidation,
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="Пароль"
                type="password"
                required
                margin="dense"
                placeholder="Введіть пароль"
                {...textFieldError(fieldState.error)}
                {...field}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disableRipple
            sx={{ my: 4 }}
          >
            Зареєструватись
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default Signup

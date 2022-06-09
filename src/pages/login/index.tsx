import { gql, useMutation } from '@apollo/client'
import { Box, Button, Divider, Typography } from '@mui/material'
import { TextField } from 'components/basic/TextField'
import { ErrorHelperText } from 'components/form/ErrorHelperText'
import { AUTH_TOKEN } from 'constants.js'
import { textFieldError } from 'lib/textFieldError'
import {
  emailValidation,
  maxLength,
  minLength,
  nameValidation,
  passwordValidation,
} from 'lib/validations.ts'
import { useSnackbar } from 'notistack'
import { Controller, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

type FormValues = {
  email: string
  password: string
}

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

const Login = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [login] = useMutation(LOGIN_MUTATION, {
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token)
      navigate('/')
      enqueueSnackbar('Вас успішно авторизовано', { variant: 'success' })
    },
  })

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
          Вхід
        </Typography>
        <Divider />
        <form
          noValidate
          onSubmit={handleSubmit(values => {
            login({
              variables: {
                email: values.email,
                password: values.password,
              },
            })
          })}
        >
          <Box mt={6} mb={2}>
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
                  inputProps={{ maxLength: 30 }}
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
            sx={{ my: 3 }}
          >
            Увійти
          </Button>
        </form>

        <Box textAlign="center">
          <Typography variant="caption">
            Не маєте акаунту?{' '}
            <Typography variant="caption" color="secondary" component="span">
              <Link
                to="/signup"
                style={{ textDecoration: 'none', color: '#F6A975' }}
              >
                Зареєструйтесь
              </Link>
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Login

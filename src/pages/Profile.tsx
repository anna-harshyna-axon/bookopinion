import { gql, useMutation, useQuery } from '@apollo/client'
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material'
import { TextField } from 'components/basic/TextField'
import { textFieldError } from 'lib/textFieldError'
import { nameValidation, required } from 'lib/validations'
import { useSnackbar } from 'notistack'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type FormValues = {
  name: string
}

const PROFILE_QUERY = gql`
  {
    getMyProfile {
      id
      name
    }
  }
`

const UPDATE_PROFILE_MUTATION = gql`
  mutation UpdateProfileMutation($id: ID!, $name: String!) {
    updateMyProfile(id: $id, name: $name) {
      name
    }
  }
`

const Profile = () => {
  const { enqueueSnackbar } = useSnackbar()

  const navigate = useNavigate()

  const { data, loading, error } = useQuery(PROFILE_QUERY)

  const { control, handleSubmit } = useForm<FormValues>()

  // () => navigate('/')

  const [updateMyProfile] = useMutation(UPDATE_PROFILE_MUTATION, {
    update: (cache, { data: { updateMyProfile } }) => {
      const data = cache.readQuery({
        query: PROFILE_QUERY,
      }) as any

      cache.writeQuery({
        query: PROFILE_QUERY,
        data: {
          getMyProfile: {
            name: data.getMyProfile.name,
          },
        },
      })
    },
    onCompleted: () => {
      enqueueSnackbar('Профіль успішно оновлено', { variant: 'success' })
    },
  })

  console.log(data)

  return (
    <Stack p={6} component="section" width="100%" height="600px" spacing={8}>
      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress />
        </Box>
      )}

      {data && data.getMyProfile && (
        <Box>
          <Typography mb={2} variant="h2" fontWeight="600">
            Мій профіль
          </Typography>
          <form
            noValidate
            onSubmit={handleSubmit(values => {
              updateMyProfile({
                variables: {
                  id: data.getMyProfile.id,
                  name: values.name,
                },
              })
            })}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
              alignItems="flex-end"
            >
              <Box width="300px">
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    ...required,
                    ...nameValidation,
                  }}
                  defaultValue={data.getMyProfile.name}
                  render={({ field, fieldState }) => (
                    <TextField
                      label="Ім'я"
                      required
                      margin="dense"
                      inputProps={{ maxLength: 30 }}
                      {...textFieldError(fieldState.error)}
                      {...field}
                    />
                  )}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disableRipple
              >
                Зберегти
              </Button>
            </Stack>
          </form>
        </Box>
      )}

      <Box>
        <Typography mb={2} variant="h2" fontWeight="600">
          Обране
        </Typography>

        <Typography mb={3}>
          Ви ще не додали жодної рекомендації в обране
        </Typography>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disableRipple
          size="large"
          onClick={() => navigate('/')}
        >
          До списку розділів
        </Button>
      </Box>
    </Stack>
  )
}
export default Profile

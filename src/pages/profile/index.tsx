import { gql, useMutation, useQuery } from '@apollo/client'
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { TextField } from 'components/basic/TextField'
import { textFieldError } from 'lib/textFieldError'
import { maxLength, minLength, nameValidation, required } from 'lib/validations'
import { useSnackbar } from 'notistack'
import { RecommendationItem } from 'pages/sections/components/RecommendationItem'
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
      favorites {
        addedRecommendation {
          id
          title
          author
          imageUrl
        }
      }
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
  const navigate = useNavigate()

  const { enqueueSnackbar } = useSnackbar()

  const { data, loading, refetch } = useQuery(PROFILE_QUERY)

  const { control, handleSubmit, formState } = useForm<FormValues>()

  const [updateMyProfile] = useMutation(UPDATE_PROFILE_MUTATION, {
    onCompleted: () => {
      refetch()
      enqueueSnackbar('Профіль успішно оновлено', { variant: 'success' })
    },
  })

  return (
    <Stack p={6} component="section" width="100%" minHeight="600px" spacing={8}>
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
            <Stack direction={{ xs: 'column', sm: 'row' }}>
              <Box width="300px" mr={{ xs: 0, sm: 2 }}>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    ...required,
                    ...nameValidation,
                    minLength: minLength(2),
                    maxLength: maxLength(50),
                  }}
                  defaultValue={data.getMyProfile.name}
                  render={({ field, fieldState }) => (
                    <TextField
                      label="Ім'я"
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
                disabled={!formState.isDirty}
                sx={{ width: '146px', mt: 2.25 }}
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

        {data &&
        data.getMyProfile.favorites &&
        data.getMyProfile.favorites.length > 0 ? (
          <Grid container spacing={3}>
            {data.getMyProfile.favorites.map(({ addedRecommendation }: any) => (
              <Grid key={addedRecommendation.id} item xs={12} sm={6} md={4}>
                <Box display="flex" justifyContent="center">
                  <RecommendationItem
                    id={addedRecommendation.id}
                    title={addedRecommendation.title}
                    author={addedRecommendation.author}
                    imageUrl={addedRecommendation.imageUrl}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <>
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
          </>
        )}
      </Box>
    </Stack>
  )
}
export default Profile

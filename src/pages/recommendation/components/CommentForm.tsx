import { gql, useMutation, useQuery } from '@apollo/client'
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material'
import { TextField } from 'components/basic/TextField'
import { textFieldError } from 'lib/textFieldError'
import { nameValidation, required } from 'lib/validations'
import { useSnackbar } from 'notistack'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type FormValues = {
  comment: string
}

const POST_COMMENT_MUTATION = gql`
  mutation PostComment($recommendationId: ID!, $content: String!) {
    postComment(recommendationId: $recommendatioId, content: $content) {
      id
    }
  }
`

export const CommentForm = () => {
  const { enqueueSnackbar } = useSnackbar()

  const navigate = useNavigate()

  const { control, handleSubmit } = useForm<FormValues>()

  // () => navigate('/')

  const [postComment] = useMutation(POST_COMMENT_MUTATION, {
    // update: (cache, { data: { updateMyProfile } }) => {
    //   const data = cache.readQuery({
    //     query: PROFILE_QUERY,
    //   }) as any

    //   cache.writeQuery({
    //     query: PROFILE_QUERY,
    //     data: {
    //       getMyProfile: {
    //         name: data.getMyProfile.name,
    //       },
    //     },
    //   })
    // },
    onCompleted: () => {
      enqueueSnackbar('Ваш коментар успішно додано', { variant: 'success' })
    },
  })

  return (
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit(values => {
        postComment({
          variables: {
            recommendationId: 115,
            name: values.comment,
          },
        })
      })}
      width="100%"
    >
      <Box mb={2}>
        <Controller
          name="comment"
          control={control}
          rules={{
            ...required,
            // length
          }}
          render={({ field, fieldState }) => (
            <TextField
              label="Коментар"
              placeholder="Залиште свій коментар..."
              required
              multiline
              margin="dense"
              rows={4}
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
        sx={{ ml: 'auto' }}
        size="large"
      >
        Надіслати
      </Button>
    </Stack>
  )
}

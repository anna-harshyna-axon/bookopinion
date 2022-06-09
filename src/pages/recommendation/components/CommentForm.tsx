import { gql, useMutation, useQuery } from '@apollo/client'
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material'
import { TextField } from 'components/basic/TextField'
import { textFieldError } from 'lib/textFieldError'
import { maxLength, minLength, required } from 'lib/validations'
import { useSnackbar } from 'notistack'
import { Controller, useForm } from 'react-hook-form'

type Props = {
  recommendationId: number
  onSubmit: () => void
}

type FormValues = {
  comment: string
}

const POST_COMMENT_MUTATION = gql`
  mutation PostComment($recommendationId: ID!, $content: String!) {
    postComment(recommendationId: $recommendationId, content: $content) {
      id
    }
  }
`

export const CommentForm = ({ recommendationId, onSubmit }: Props) => {
  const { enqueueSnackbar } = useSnackbar()

  const { control, handleSubmit, reset, watch } = useForm<FormValues>({
    defaultValues: {
      comment: '',
    },
  })

  const [postComment] = useMutation(POST_COMMENT_MUTATION, {
    onCompleted: () => {
      reset()
      onSubmit()
      enqueueSnackbar('Коментар успішно опубліковано', { variant: 'success' })
    },
  })
  const commentValue = watch('comment')

  console.log(commentValue)

  return (
    <Stack
      component="form"
      noValidate
      onSubmit={handleSubmit(values => {
        postComment({
          variables: {
            recommendationId,
            content: values.comment,
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
            minLength: minLength(3),
            maxLength: maxLength(200),
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

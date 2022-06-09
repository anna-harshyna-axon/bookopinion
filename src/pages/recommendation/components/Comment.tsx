import { gql, useMutation, useQuery } from '@apollo/client'
import {
  Box,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material'
import { IconDelete, IconEdit, IconUser } from 'assets/icons'
import { TextField } from 'components/basic/TextField'
import { ConfirmationDialog } from 'components/basic/TextField/ConfirmationDialog'
import { useAuth } from 'hooks/use-auth'
import { useBoolean } from 'hooks/use-boolean'
import jwt_decode from 'jwt-decode'
import { localizeDate } from 'lib/localizeDate'
import { textFieldError } from 'lib/textFieldError'
import { required } from 'lib/validations'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

const GET_COMMENT_MUTATION = gql`
  mutation GetCommentMutation($commentId: ID!) {
    getComment(commentId: $commentId) {
      content
    }
  }
`

const DELETE_COMMENT_MUTATION = gql`
  mutation DeleteCommentMutation($commentId: ID!) {
    deleteComment(commentId: $commentId) {
      id
    }
  }
`

const UPDATE_COMMENT_MUTATION = gql`
  mutation UpdateCommentMutation($commentId: ID!, $content: String!) {
    updateComment(commentId: $commentId, content: $content) {
      id
    }
  }
`

const EDIT_COMMENT_FORM_ID = 'ed1tCommentForm1d'

type Props = {
  commentId: number
  userId: number
  createdAt: Date
  content: string
  userName: string
  refetch: () => void
}

type FormValues = {
  comment: string
}

export const Comment = (props: Props) => {
  const { authToken } = useAuth()
  const { enqueueSnackbar } = useSnackbar()

  const [selectedCommentId, setSelectedCommentId] = useState<number | null>(
    null,
  )

  const deleteDialogOpen = useBoolean()
  const editDialogOpen = useBoolean()

  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
    onCompleted: () => {
      props.refetch()
      enqueueSnackbar('Коментар успішно видалено', { variant: 'success' })
    },
  })

  const [getCommentById, { data }] = useMutation(GET_COMMENT_MUTATION, {})

  useEffect(() => {
    if (selectedCommentId !== null) {
      getCommentById({
        variables: {
          commentId: selectedCommentId,
        },
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCommentId])

  const comment = data && data.getComment && data.getComment.content

  const [updateComment] = useMutation(UPDATE_COMMENT_MUTATION, {
    onCompleted: () => {
      props.refetch()
      enqueueSnackbar('Коментар успішно оновлено', { variant: 'success' })
    },
  })

  const { handleSubmit, control } = useForm<FormValues>({})

  const getDecodedUserId = () => {
    const decodedToken: Record<string, any> | undefined = authToken
      ? jwt_decode(authToken)
      : undefined

    return decodedToken?.userId.toString()
  }

  const commentBelongsToUser = getDecodedUserId() === props.userId

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex">
          <IconUser viewBox="0 0 40 40" sx={{ mr: 1.5 }} />
          <Box>
            <Box display="flex" alignItems="center">
              <Typography fontWeight={600} mr={1.5}>
                {props.userName}
              </Typography>
              <Typography variant="subtitle1" color="text.disabled">
                {localizeDate(props.createdAt)}
              </Typography>
            </Box>

            <Typography maxWidth="480px">{props.content}</Typography>
          </Box>
        </Box>

        {commentBelongsToUser && (
          <Box display="flex" justifyContent="center">
            <Tooltip title="Редагувати">
              <IconButton
                disableRipple
                sx={{ p: 0, mr: 2 }}
                onClick={() => {
                  setSelectedCommentId(props.commentId)
                  editDialogOpen.setTrue()
                }}
              >
                <IconEdit viewBox="0 0 16 16" sx={{ fontSize: '16px' }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Видалити">
              <IconButton
                disableRipple
                sx={{ p: 0 }}
                onClick={deleteDialogOpen.setTrue}
              >
                <IconDelete sx={{ fontSize: '18px' }} />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Box>

      <ConfirmationDialog
        isOpen={deleteDialogOpen.isTrue}
        onClose={deleteDialogOpen.setFalse}
        title="Ви впевнені, що хочете видалити цей коментар?"
        onConfirm={() => {
          deleteComment({
            variables: {
              commentId: props.commentId,
            },
          })
          deleteDialogOpen.setFalse()
        }}
      />
      {console.log(selectedCommentId)}
      <ConfirmationDialog
        isOpen={editDialogOpen.isTrue}
        onClose={editDialogOpen.setFalse}
        title="Оновити цей коментар?"
        formId={EDIT_COMMENT_FORM_ID}
      >
        {comment && (
          <Box
            component="form"
            id={EDIT_COMMENT_FORM_ID}
            noValidate
            onSubmit={handleSubmit(values => {
              updateComment({
                variables: {
                  commentId: selectedCommentId,
                  content: values.comment,
                },
              })

              editDialogOpen.setFalse()
            })}
            width="100%"
          >
            <Controller
              name="comment"
              control={control}
              rules={{
                ...required,
                // length
              }}
              defaultValue={comment}
              render={({ field, fieldState }) => (
                <TextField
                  label="Коментар"
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
        )}
      </ConfirmationDialog>
    </>
  )
}

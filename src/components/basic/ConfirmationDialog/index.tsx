import {
  Button,
  Dialog,
  DialogActions,
  dialogClasses,
  DialogContent,
  DialogTitle,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  onConfirm?: () => void
  formId?: string
  children?: ReactNode
}

export const ConfirmationDialog = (props: Props) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      open={props.isOpen}
      onClose={props.onClose}
      fullScreen={fullScreen}
      sx={{
        [`& .${dialogClasses.paper}`]: {
          maxWidth: '400px',
          height: 'auto',
          width: fullScreen ? 'calc(100% - 40px)' : '100%',
          borderRadius: '6px',
        },
      }}
    >
      <DialogTitle>
        <Typography variant="body1" fontWeight="600" textAlign="center">
          {props.title}
        </Typography>
      </DialogTitle>

      {props.children && (
        <DialogContent
          sx={{
            px: 2,
            pb: 3,
          }}
        >
          {props.children}
        </DialogContent>
      )}

      <DialogActions
        sx={{
          justifyContent: 'space-between',
          px: 2,
          pb: 5,
        }}
      >
        <Button
          size="small"
          onClick={props.onClose}
          variant="contained"
          color="info"
        >
          Ні
        </Button>

        <Button
          size="small"
          variant="contained"
          onClick={props.onConfirm ?? undefined}
          color="secondary"
          {...(props.formId && {
            type: 'submit',
            form: props.formId,
          })}
        >
          Так
        </Button>
      </DialogActions>
    </Dialog>
  )
}

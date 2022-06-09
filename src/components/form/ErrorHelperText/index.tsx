import ErrorIcon from '@mui/icons-material/Error'
import { Box, Typography } from '@mui/material'

export const ErrorHelperText = ({ msg }: { msg: string }) => {
  if (msg.trim().length === 0) {
    return null
  }

  return (
    <Box display="flex" alignItems="center" pt={0.5}>
      <ErrorIcon color="error" />

      <Typography variant="subtitle1" fontWeight="400" pl={0.5}>
        {msg}
      </Typography>
    </Box>
  )
}

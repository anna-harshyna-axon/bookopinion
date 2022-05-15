import ErrorIcon from '@mui/icons-material/Error'
import { Box, Typography } from '@mui/material'

export const ErrorHelperText = ({ msg }: { msg: string }) => {
  if (msg.trim().length === 0) {
    return null
  }

  return (
    <Box display="flex" fontWeight="400" alignItems="flex-start" pt={0.5}>
      <Box pr={0.75} display="flex">
        <ErrorIcon color="error" />
      </Box>
      <Typography variant="body2" display="inline">
        {msg}
      </Typography>
    </Box>
  )
}

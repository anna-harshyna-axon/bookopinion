import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded'
import { Box, Typography } from '@mui/material'

export const FormError = ({
  message,
  children,
}: {
  message: string
  children?: React.ReactNode
}) => {
  return (
    <Box
      display="flex"
      p="8px 12px"
      mt={0.5}
      borderRadius="8px"
      bgcolor="#FFEBE6"
    >
      <ErrorRoundedIcon sx={{ fill: '#BF2600', mr: '8px' }} />
      <Typography variant="body1" color="#BF2600" textAlign="left">
        {message}
        {children}
      </Typography>
    </Box>
  )
}

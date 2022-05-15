import { Box, Typography } from '@mui/material'
import { IconProfile } from 'assets/icons'

type Props = {
  createdAt: string
  content: string
  userName: string
}

export const Comment = (props: Props) => {
  return (
    <Box>
      <IconProfile />
      <Box>
        <Box>
          <Typography>{props.userName}</Typography>
          <Typography>{props.createdAt}</Typography>
        </Box>
        <Typography>{props.content}</Typography>
      </Box>
    </Box>
  )
}

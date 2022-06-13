import { Box, Stack, Typography } from '@mui/material'
import notFound from 'assets/illustrations/not-found.svg'

const NotFoundPage = () => {
  return (
    <Stack justifyContent="center" height="600px">
      <Box display="flex" justifyContent="center">
        <Box
          mb={6}
          component="img"
          src={notFound}
          alt="Page not found"
          width="400px"
          height="240px"
        />
      </Box>

      <Typography variant="h2" fontWeight={600} textAlign="center">
        Сторінку не знайдено
      </Typography>
    </Stack>
  )
}

export default NotFoundPage

import { Box, Stack, Typography } from '@mui/material'
import tech from 'assets/illustrations/tech.svg'

const TechnicalSection = () => {
  return (
    <Stack pt={5} pb={10} px={4} spacing={8}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column', md: 'row' }}
        px={{ xs: 0, md: 26 }}
      >
        <Typography
          fontSize="40px"
          lineHeight="60px"
          fontWeight="600"
          textAlign="center"
          mb={{ xs: 4, md: 0 }}
        >
           Технічна література
        </Typography>

        <Box>
          <img
            src={tech}
            alt="Technical Section"
            style={{ width: '260px', height: '260px' }}
          />
        </Box>
      </Box>
    </Stack>
  )
}
export default TechnicalSection

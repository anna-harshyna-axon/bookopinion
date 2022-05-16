import { Box, Stack, Typography } from '@mui/material'
import selfDev from 'assets/illustrations/self-dev.svg'

const SelfDevSection = () => {
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
           Саморозвиток
        </Typography>

        <Box>
          <img
            src={selfDev}
            alt="Self Development Section"
            style={{ width: '300px', height: '220px' }}
          />
        </Box>
      </Box>
    </Stack>
  )
}
export default SelfDevSection

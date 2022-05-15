import { Box, Button, Stack, Typography } from '@mui/material'
import idea from 'assets/illustrations/idea.svg'
import womanTyping from 'assets/illustrations/woman-typing.svg'

import { Sections } from './components/Sections'

// const generateRandomRecommendation = () => {}

const Main = () => {
  return (
    <Stack pt={5} pb={10} px={{ xs: 5, md: 18 }} spacing={8}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <Box
          maxWidth="542px"
          textAlign={{ xs: 'center', md: 'left' }}
          mb={{ xs: 5, md: 0 }}
        >
          <Typography mb={2}>
            Читання є невід’ємною частиною розвитку: як професійного, так і
            особистісного.
          </Typography>
          <Typography>
            Тому завжди актуальною є тема пошуку нових книжок.
          </Typography>
        </Box>
        <Box>
          <Box>
            <img
              src={idea}
              alt="Idea"
              style={{ width: '292px', height: '266px' }}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography mb={4} textAlign="center">
          В цьому додатку ви зможете знайти рекомендації книжок за такими
          розділами:
        </Typography>
        <Sections />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <Box mb={{ xs: 6, md: 0 }}>
          <img
            src={womanTyping}
            alt="Woman Typing"
            style={{ width: '370px', height: '220px' }}
          />
        </Box>
        <Stack justifyContent="center" alignItems="center">
          <Typography textAlign="center" mb={3} maxWidth="326px">
            Згенеруйте випадкову рекомендацію за допомогою кнопки
          </Typography>
          <Button color="secondary" variant="contained" disableRipple>
            Згенерувати
          </Button>
        </Stack>
      </Box>
    </Stack>
  )
}
export default Main

import { Button, Stack } from '@mui/material'
import { IconBooks, IconComputer, IconDiagram } from 'assets/icons'
import { useNavigate } from 'react-router-dom'

export const Sections = () => {
  const navigate = useNavigate()

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 5, md: 10 }}
      justifyContent="center"
    >
      <Button onClick={() => navigate('/')} variant="contained" disableRipple>
        Художня література <IconBooks viewBox="0 0 44 44" sx={{ ml: 1 }} />
      </Button>
      <Button onClick={() => navigate('/')} variant="contained" disableRipple>
        Саморозвиток <IconDiagram viewBox="0 0 44 44" sx={{ ml: 1 }} />
      </Button>
      <Button onClick={() => navigate('/')} variant="contained" disableRipple>
        Технічна література <IconComputer viewBox="0 0 44 44" sx={{ ml: 1 }} />
      </Button>
    </Stack>
  )
}

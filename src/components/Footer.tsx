import { Box, Divider, Link, Stack, Typography } from '@mui/material'
import {
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconLinkedin,
} from 'assets/icons'

const Footer = () => {
  return (
    <Stack
      component="section"
      p={5}
      spacing={3}
      bgcolor="#85CDEC"
      justifyContent="center"
      alignItems="center"
    >
      <Stack alignItems="center" justifyContent="center">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="body2" color="text.secondary" mr={2}>
            Бажаєте зв’язатись з розробником? Зробіть це за допомогою однієї з
            соціальних мереж:
          </Typography>

          <Stack direction="row" spacing={1} height="24px">
            <Link
              href="https://www.linkedin.com/in/anna-harshyna/"
              target="_blank"
            >
              <IconLinkedin viewBox="0 0 30 30" />
            </Link>
            <Link href="https://github.com/AnnaHarshyna" target="_blank">
              <IconGithub viewBox="0 0 30 30" />
            </Link>
            <Link
              href="https://www.facebook.com/anya.garshina.5/"
              target="_blank"
            >
              <IconFacebook viewBox="0 0 30 30" />
            </Link>
            <Link href="https://instagram.com/aniaharshyna" target="_blank">
              <IconInstagram viewBox="0 0 30 30" />
            </Link>
          </Stack>
        </Box>
      </Stack>
      <Divider sx={{ width: '100%', bgcolor: 'text.secondary' }} />
      <Typography variant="body2" color="text.secondary">
        Copyright © 2022 BookOpinion
      </Typography>
    </Stack>
  )
}

export default Footer

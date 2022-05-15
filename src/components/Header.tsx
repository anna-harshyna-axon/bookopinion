import { Box } from '@mui/material'
import { IconProfile } from 'assets/icons'
import Logo from 'assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="80px"
      bgcolor="#85CDEC"
      px={4}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="BookOpinion"
          width="130px"
          height="20px"
          style={{ display: 'block' }}
        />
      </Link>
      <Link
        to="/"
        style={{ textDecoration: 'none', color: '#FFF', fontWeight: 600 }}
      >
        Головна
      </Link>
      <Link to="/profile" style={{ width: '24px', height: '24px' }}>
        <IconProfile viewBox="0 0 36 36" />
      </Link>
    </Box>
  )
}

export default Header

import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import { IconProfile } from 'assets/icons'
import Logo from 'assets/logo.png'
import { AUTH_TOKEN } from 'constants.js'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const authToken = localStorage.getItem(AUTH_TOKEN)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

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

      {authToken ? (
        <>
          <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{ width: '24px', height: '24px' }}
          >
            <IconProfile viewBox="0 0 36 36" />
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem
              onClick={() => {
                navigate('/profile')
                // handleClose
              }}
            >
              Мій профіль
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                navigate(`/`)
              }}
            >
              Вийти
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Link
          to="/login"
          style={{ textDecoration: 'none', color: '#FFF', fontWeight: 600 }}
        >
          Увійти
        </Link>
      )}
    </Box>
  )
}

export default Header

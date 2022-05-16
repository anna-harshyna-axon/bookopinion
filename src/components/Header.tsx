import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { IconProfile } from 'assets/icons'
import Logo from 'assets/logo.png'
import { AUTH_TOKEN } from 'constants.js'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const theme = useTheme()
  const navigate = useNavigate()

  const { enqueueSnackbar } = useSnackbar()

  const location = useLocation()

  const isLoginPage = location.pathname === '/login'

  const smallerThanDesktop = useMediaQuery(theme.breakpoints.down('md'))

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
      width="100%"
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

      {!smallerThanDesktop && (
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#FFF',
            fontWeight: 600,
            paddingRight: '120px',
          }}
        >
          Головна
        </Link>
      )}

      {authToken ? (
        <>
          <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{ width: '24px', height: '24px' }}
            disableRipple
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
                handleClose()
              }}
            >
              Мій профіль
            </MenuItem>
            <MenuItem
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                navigate(`/`)
                enqueueSnackbar('Ви вийшли з вашого акаунту', {
                  variant: 'success',
                })
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

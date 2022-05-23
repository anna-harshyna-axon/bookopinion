import { styled } from '@mui/material'
import { SnackbarProvider as Provider } from 'notistack'
import { useRef } from 'react'

export const StyledProvider = styled(Provider)(({ theme }) => ({
  '&.SnackbarContent-root': {
    width: '360px',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
  },

  '&.SnackbarItem-variantSuccess': {
    background: theme.palette.secondary.main,
  },

  // '&.SnackbarItem-variantError': {
  //   background: theme.palette.error.main,
  // },
}))

export const SnackbarProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const notistackRef = useRef<Provider | null>(null)

  return (
    <StyledProvider
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      ref={notistackRef}
    >
      {children}
    </StyledProvider>
  )
}

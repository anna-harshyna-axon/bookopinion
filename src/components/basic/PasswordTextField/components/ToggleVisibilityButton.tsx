import { IconButton } from '@mui/material'
import { IconEye, IconEyeOff } from 'assets/icons'
import { MouseEvent } from 'react'

type Props = {
  isVisible: boolean
  onClick: () => void
}

const preventDefault = (event: MouseEvent) => {
  event.preventDefault()
}

export const ToggleVisibilityButton = ({ isVisible, onClick }: Props) => {
  return (
    <IconButton
      onClick={onClick}
      onMouseDown={preventDefault}
      title={isVisible ? 'Hide password' : 'Show password'}
    >
      {isVisible ? <IconEye /> : <IconEyeOff />}
    </IconButton>
  )
}

import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const IconDelete = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M15.8637 2.7907C15.8637 3.33228 15.5197 3.89295 14.8163 4.34279C14.1185 4.78903 13.1242 5.0814 12.0001 5.0814C10.876 5.0814 9.8817 4.78903 9.18394 4.34279C8.48054 3.89295 8.13647 3.33228 8.13647 2.7907C8.13647 2.24912 8.48054 1.68845 9.18394 1.2386C9.8817 0.792361 10.876 0.5 12.0001 0.5C13.1242 0.5 14.1185 0.792361 14.8163 1.2386C15.5197 1.68845 15.8637 2.24912 15.8637 2.7907Z"
        fill="white"
        stroke="black"
      />
      <path
        d="M3.77271 6.63953H20.2273V23.5H3.77271V6.63953Z"
        fill="white"
        stroke="black"
      />
      <line y1="6.19763" x2="24" y2="6.19763" stroke="black" />
      <rect
        x="2.43188"
        y="3.59888"
        width="19.1364"
        height="1.73256"
        fill="white"
        stroke="black"
        strokeWidth="0.5"
      />
      <line x1="8.13647" y1="8.93018" x2="8.13647" y2="20.093" stroke="black" />
      <line x1="12.5" y1="9" x2="12.5" y2="20.1628" stroke="black" />
      <line x1="16.8635" y1="8.93018" x2="16.8635" y2="20.093" stroke="black" />
    </SvgIcon>
  )
}

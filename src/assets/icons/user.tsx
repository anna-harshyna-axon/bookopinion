import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const IconUser = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95434 31.0457 0 20 0C8.9543 0 0 8.95434 0 20C0 31.0457 8.9543 40 20 40Z"
        fill="#EB833D"
        fill-opacity="0.7"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.667 29.1531V25.2472C11.667 21.8787 14.2688 19.1666 17.5006 19.1666H22.5008C25.7326 19.1666 28.3344 21.8787 28.3344 25.2472V29.1531H11.667Z"
        fill="white"
      />
      <path
        d="M19.9845 17.8665C22.2765 17.8665 24.1345 16.001 24.1345 13.6999C24.1345 11.3987 22.2765 9.5332 19.9845 9.5332C17.6925 9.5332 15.8345 11.3987 15.8345 13.6999C15.8345 16.001 17.6925 17.8665 19.9845 17.8665Z"
        fill="white"
      />
      <path
        d="M25.0009 25.3846V29.1666M15.0005 25.3846V29.1666V25.3846Z"
        stroke="white"
        stroke-linejoin="round"
      />
    </SvgIcon>
  )
}

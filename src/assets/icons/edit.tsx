import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const IconEdit = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <rect width="16" height="16" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_337_47" transform="scale(0.0416667)" />
        </pattern>
        <image
          id="image0_337_47"
          width="24"
          height="24"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABHUlEQVRIie3Vuy6EQRjG8Z+s1VGxrkNIuAJZ69yKG5EolISKROcCBCEK7sAhUVrUKodGyPYyybvJZCMO+32lfzeTN8+TeU9DOYzgGu84wpASmUULS+jHBm5RK0N8Ea+4wT56434tTAq9ZBwfeAihUxxkJus4LCL+jGlsxwuGO0wGoiZdizfi3BMmFxjMTJZxVVRcZrITJrV4USu669eM4im65iuSyS6aePkmrivxNlNR+NRdpYvXI27iXzznPy3lpWUyJm/uh7hGTHKa6D+xF+s1bb9q2eKJe4zhOH6kahlpaZM24Bsq6MNJh0m9iHhiAWfZOTeZKSqe2MRqdq5EuppR+K5ynnOJlTA5j3TdReHTdizMY3wUW5iPmpTGJxhVVZ6GkQTNAAAAAElFTkSuQmCC"
        />
      </defs>
    </SvgIcon>
  )
}

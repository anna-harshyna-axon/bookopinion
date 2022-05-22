import { Box, Typography } from '@mui/material'

type Props = {
  id: number
  title: string
  author: string
  imageUrl: string
}

export const RecommendationItem = ({ id, title, author, imageUrl }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      pt={3}
      pb={4}
      height="360px"
      width="260px"
      boxShadow="10px 16px 20px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.2)"
      borderRadius="20px"
      sx={{
        '&:hover': {
          cursor: 'pointer',
          background: '#E5E5E5',
        },
      }}
    >
      <Typography variant="subtitle1" maxWidth="180px" noWrap flex="none">
        {author}
      </Typography>
      <Typography
        fontWeight="600"
        maxWidth="180px"
        textAlign="center"
        minHeight="48px"
        mb={0.5}
      >
        {title}
      </Typography>
      <Box>
        <img
          src={imageUrl}
          alt="Recommendation"
          style={{ width: '180px', height: '250px', borderRadius: '20px' }}
        />
      </Box>
    </Box>
  )
}

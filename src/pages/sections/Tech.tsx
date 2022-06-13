import { gql, useQuery } from '@apollo/client'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import tech from 'assets/illustrations/tech.svg'
import { RecommendationItem } from 'pages/sections/components/RecommendationItem'

const SECTION_QUERY = gql`
  {
    getSection(filter: 446) {
      recommendations {
        id
        title
        author
        imageUrl
      }
    }
  }
`

const TechnicalSection = () => {
  const { data, loading } = useQuery(SECTION_QUERY)

  return (
    <Box pt={5} pb={10} px={4}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column', md: 'row' }}
        px={{ xs: 0, md: 26 }}
        mb={8}
      >
        <Typography
          fontSize="40px"
          lineHeight="60px"
          fontWeight="600"
          textAlign="center"
          mb={{ xs: 4, md: 0 }}
        >
           Технічна література
        </Typography>

        <Box>
          <img
            src={tech}
            alt="Technical Section"
            style={{ width: '260px', height: '260px' }}
          />
        </Box>
      </Box>

      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress />
        </Box>
      )}

      <Grid container spacing={3}>
        {data &&
          data.getSection &&
          data.getSection.recommendations &&
          data.getSection.recommendations.map(
            (recommendation: {
              id: number
              title: string
              author: string
              imageUrl: string
            }) => (
              <Grid key={recommendation.id} item xs={12} sm={6} md={4}>
                <Box display="flex" justifyContent="center">
                  <RecommendationItem
                    id={recommendation.id}
                    title={recommendation.title}
                    author={recommendation.author}
                    imageUrl={recommendation.imageUrl}
                  />
                </Box>
              </Grid>
            ),
          )}
      </Grid>
    </Box>
  )
}
export default TechnicalSection

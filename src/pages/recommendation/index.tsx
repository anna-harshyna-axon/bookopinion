import { gql, useQuery } from '@apollo/client'
import { Box, CircularProgress, Divider, Link, Typography } from '@mui/material'
import { useAuth } from 'hooks/use-auth'
import { useLocation } from 'react-router-dom'

import { Comment } from './components/Comment'
import { CommentForm } from './components/CommentForm'

const RECOMMENDATION_QUERY = gql`
  query RecommendationQuery($id: ID!) {
    getRecommendationDetails(id: $id) {
      title
      author
      description
      shopUrl
      imageUrl
      comments {
        id
        createdAt
        content
        postedBy {
          name
        }
      }
    }
  }
`

const RecommendationDetails = () => {
  const loc: any = useLocation()

  const { authToken } = useAuth()

  const id = loc.state.id

  const { data, loading } = useQuery(RECOMMENDATION_QUERY, {
    variables: {
      id,
    },
  })

  const details = data && data.getRecommendationDetails

  return (
    <>
      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress />
        </Box>
      )}

      {details && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px={{ xs: 4, sm: 10 }}
          py={5}
        >
          <Typography mb={1}>{details.author}</Typography>
          <Typography mb={3} variant="h2" fontWeight="600">
            {details.title}
          </Typography>
          <Box mb={8}>
            <img
              src={details.imageUrl}
              alt="Recommendation"
              style={{ width: '260px', height: '380px', borderRadius: '20px' }}
            />
          </Box>

          <Typography mb={7}>{details.description}</Typography>
          <Box mb={8} textAlign="center">
            <Typography> Зацікавила книга?</Typography>

            <Link
              href={details.shopUrl}
              target="_blank"
              sx={{ fontSize: '16px' }}
            >
              Перейти до інтернет-магазину
            </Link>
          </Box>

          {authToken ? (
            <CommentForm />
          ) : (
            <Typography>
              Щоб залишити свій коментар, будь ласка, увійдіть у свій акаунт або
              зареєструйтесь
            </Typography>
          )}

          <Box width="100%">
            <Typography mb={2}>Коментарі</Typography>
            <Divider sx={{ mb: 5 }} />
            <Box>
              {details.comments ? (
                details.comments.map((comment: any) => (
                  <Box key={comment.id} mb={5}>
                    <Comment
                      createdAt={comment.createdAt}
                      content={comment.content}
                      userName={comment.postedBy.name}
                    />
                  </Box>
                ))
              ) : (
                <Typography textAlign="center">
                  У цієї рекомендації ще немає коментарів
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}

export default RecommendationDetails

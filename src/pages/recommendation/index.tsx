import { gql, useQuery } from '@apollo/client'
import { Box, CircularProgress, Divider, Link, Typography } from '@mui/material'
import { IconInfo } from 'assets/icons'
import { useAuth } from 'hooks/use-auth'
import { useLocation } from 'react-router-dom'

import { Comment } from './components/Comment'
import { CommentForm } from './components/CommentForm'

const RECOMMENDATION_QUERY = gql`
  query RecommendationQuery($id: ID!) {
    getRecommendationDetails(id: $id) {
      id
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
          id
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

  const { data, loading, refetch } = useQuery(RECOMMENDATION_QUERY, {
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
          py={6}
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
            <CommentForm recommendationId={details.id} onSubmit={refetch} />
          ) : (
            <Box display="flex" justifyContent="center" mb={10}>
              <IconInfo viewBox="0 0 40 40" sx={{ mr: 1 }} />
              <Typography>
                Щоб залишити свій коментар, будь ласка,{' '}
                <Link color="secondary" href="/login" sx={{ fontSize: '16px' }}>
                  увійдіть
                </Link>{' '}
                у свій акаунт або{' '}
                <Link
                  color="secondary"
                  href="/signup"
                  sx={{ fontSize: '16px' }}
                >
                  зареєструйтесь
                </Link>
              </Typography>
            </Box>
          )}

          <Box width="100%">
            <Typography mb={2}>Коментарі</Typography>
            <Divider sx={{ mb: 5 }} />
            <Box width="100%">
              {details.comments && details.comments.length > 0 ? (
                details.comments.map((comment: any) => (
                  <Box key={comment.id} mb={5} width="100%">
                    <Comment
                      commentId={comment.id}
                      userId={comment.postedBy.id}
                      createdAt={comment.createdAt}
                      content={comment.content}
                      userName={comment.postedBy.name}
                      refetch={refetch}
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

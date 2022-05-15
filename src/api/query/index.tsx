import { gql } from '@apollo/client'

export const COMMENTS_QUERY = gql`
  {
    getCommentsList {
      id
      createdAt
      content
      postedBy {
        name
      }
    }
  }
`

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

export const POST_COMMENT_MUTATION = gql`
  {
    mutation PostComment(
      $content: String!
    ) {
      postComment(content: $content) {
        id
        createdAt
        content
        postedBy
      }
    }
  }
`

import { useMutation } from '@apollo/client'
import { POST_COMMENT_MUTATION } from 'api'
import { useState } from 'react'

export const CommentForm = () => {
  const [formState, setFormState] = useState({
    content: '',
  })

  const [postComment] = useMutation(POST_COMMENT_MUTATION, {
    variables: {
      content: formState.content,
    },
  })

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          postComment()
        }}
      >
        <div>
          <input
            style={{ maxWidth: '500px' }}
            value={formState.content}
            onChange={e =>
              setFormState({
                ...formState,
                content: e.target.value,
              })
            }
            type="text"
            placeholder="Write your comment here"
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  )
}

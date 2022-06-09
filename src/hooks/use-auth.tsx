import { AUTH_TOKEN } from 'constants.js'
import jwt_decode from 'jwt-decode'

export const useAuth = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN)

  const logout = () => localStorage.removeItem(AUTH_TOKEN)

  const getDecodedUserId = () => {
    const decodedToken: Record<string, any> | undefined = authToken
      ? jwt_decode(authToken)
      : undefined

    return decodedToken?.userId.toString()
  }

  return { authToken, logout, userId: getDecodedUserId() }
}

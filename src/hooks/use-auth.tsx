import { AUTH_TOKEN } from 'constants.js'

export const useAuth = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN)

  const logout = () => localStorage.removeItem(AUTH_TOKEN)

  return { authToken, logout }
}

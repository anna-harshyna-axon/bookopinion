import { Box } from '@mui/material'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { useAuth } from 'hooks/use-auth'
import Login from 'pages/login'
import Main from 'pages/main'
import NotFound from 'pages/not-found'
import Profile from 'pages/profile'
import RecommendationDetails from 'pages/recommendation'
import FictionSection from 'pages/sections/Fiction'
import SelfDevSection from 'pages/sections/SelfDev'
import TechnicalSection from 'pages/sections/Tech'
import Signup from 'pages/signup'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

function RequireAuth({ children }: { children: JSX.Element }) {
  const { authToken } = useAuth()
  const location = useLocation()

  if (!authToken) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

function RequireUnauth({ children }: { children: JSX.Element }) {
  const { authToken } = useAuth()

  if (authToken !== null) {
    return <Navigate to="/" replace />
  }

  return children
}

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={
            <RequireUnauth>
              <Login />
            </RequireUnauth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <RequireUnauth>
              <Signup />
            </RequireUnauth>
          }
        />
        <Route path="/self-development" element={<SelfDevSection />} />
        <Route path="/technical" element={<TechnicalSection />} />
        <Route path="/fiction" element={<FictionSection />} />
        <Route path="/recommendation/:id" element={<RecommendationDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App

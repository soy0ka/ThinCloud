import React from 'react'
import { useMainContext } from '~/context'
import { useNavigate } from 'react-router-dom'
import { wrapError } from '~/components/ErrorBoundary'
import { Box, useMediaQuery, useTheme } from '@mui/material'

export const Main: React.FC = wrapError(() => {
  const navigate = useNavigate()
  const { user } = useMainContext()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  React.useEffect(() => {
    if (!user) navigate('/login')
  }, [user])

  return (
    user && (
      <Box
        sx={{
          justifyContent: 'center',
          display: 'absolute',
          marginTop: '20px',
          marginLeft: isMobile ? '20px' : '70px',
          marginRight: isMobile ? '20px' : '70px',
          maxWidth: '600px',
          margin: 'auto',
        }}
      ></Box>
    )
  )
})

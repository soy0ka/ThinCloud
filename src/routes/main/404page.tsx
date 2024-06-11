import Box from '@mui/material/Box'
import React from 'react'
import { wrapError } from '~/components/ErrorBoundary'
import { Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Main: React.FC = wrapError(() => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const navigate = useNavigate()

  return (
    <Box
      sx={{
        justifyContent: 'center',
        display: 'absolute',
        marginTop: '20px',
        textAlign: 'center',
        marginLeft: isMobile ? '20px' : '70px',
        marginRight: isMobile ? '20px' : '70px',
        maxWidth: '400px',
        margin: 'auto',
        marginBottom: '200px',
      }}
    >
      <Typography variant="h2" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" gutterBottom>
        페이지를 찾을 수 없습니다
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => navigate('/')}
      >
        홈으로
      </Button>
    </Box>
  )
})

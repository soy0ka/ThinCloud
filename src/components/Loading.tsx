import React from 'react'
import { Box, CircularProgress } from '@mui/material'
import { wrapError } from '~/components/ErrorBoundary'

export const LoadingImage: React.FC = wrapError(() => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <CircularProgress />
    </Box>
  )
})

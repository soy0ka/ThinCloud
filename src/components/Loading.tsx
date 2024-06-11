import React from 'react'
import { Box } from '@mui/material'
import Loading from '~/assets/loading.gif'
import { wrapError } from '~/components/ErrorBoundary'

export const LoadingImage: React.FC = wrapError(() => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <img src={Loading} alt="loading" />
    </Box>
  )
})

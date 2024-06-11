import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { wrapError } from '~/components/ErrorBoundary'
import { Nav } from './nav'
import { Typography } from '@mui/material'
import { useMainContext } from '~/context'
import useSWR from 'swr'
import { ToastContainer } from 'react-toastify'

export const RootLayout: React.FC = wrapError(() => {
  const { update } = useMainContext()

  useSWR('/auth/user', {
    onSuccess: (data) => {
      update(data)
    },
  })

  return (
    <Box>
      <Nav />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <ToastContainer />
        <Toolbar />
        <Box sx={{ flexGrow: 1, height: 0, overflow: 'auto' }}>
          <Outlet />
          <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
            © 2024 Onde. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
})

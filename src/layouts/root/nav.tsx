import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '@mui/icons-material/CloudDownload'
import { wrapError } from '~/components/ErrorBoundary'

export const Nav: React.FC = wrapError(() => {
  const navigate = useNavigate()
  const navigateHome = () => navigate('/')

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'var(--primary-color)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Apple SD Gothic Neo',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
            onClick={() => navigateHome()}
          >
            얇은구름
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Logo sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Apple SD Gothic Neo',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
            onClick={() => navigateHome()}
          >
            얇은구름
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
})

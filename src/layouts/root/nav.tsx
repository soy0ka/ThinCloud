import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Button,
  Tooltip,
} from '@mui/material'
import { useMainContext } from '~/context'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '@mui/icons-material/CloudDownload'
import { NavMenu, UserMenu } from './components/menu'
import { wrapError } from '~/components/ErrorBoundary'

export const Nav: React.FC = wrapError(() => {
  const { user } = useMainContext()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const navigate = useNavigate()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => setAnchorElNav(null)

  const handleCloseUserMenu = () => setAnchorElUser(null)

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
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {user && (
              <NavMenu
                open={Boolean(anchorElNav)}
                anchorEl={anchorElNav}
                handleClose={handleCloseNavMenu}
                navigate={navigate}
              />
            )}
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {user && (
              <>
                <Button
                  onClick={() => {
                    navigate('/stocks')
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  재고현황
                </Button>
              </>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <Tooltip title="사용자 설정">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar />
                </IconButton>
              </Tooltip>
            ) : (
              <Button
                sx={{ color: 'white' }}
                onClick={() => navigate('/login')}
              >
                로그인
              </Button>
            )}
            <UserMenu
              open={Boolean(anchorElUser)}
              anchorEl={anchorElUser}
              handleClose={handleCloseUserMenu}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
})

import React from 'react'
import Cookies from 'js-cookie'
import { Menu, MenuItem, Typography } from '@mui/material'

interface UserMenuProps {
  open: boolean
  anchorEl: HTMLElement | null
  handleClose: () => void
}
interface NavMenuProps extends UserMenuProps {
  navigate: (path: string) => void
}

export const UserMenu = ({ open, anchorEl, handleClose }: UserMenuProps) => (
  <Menu
    sx={{ mt: '45px' }}
    id="menu-appbar"
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={open}
    onClose={handleClose}
  >
    <MenuItem onClick={handleClose}>
      <Typography
        textAlign="center"
        onClick={() => {
          Cookies.remove('Authorization')
          window.location.reload()
        }}
      >
        로그아웃
      </Typography>
    </MenuItem>
  </Menu>
)

export const NavMenu = ({
  open,
  anchorEl,
  handleClose,
  navigate,
}: NavMenuProps) => (
  <Menu
    id="menu-appbar"
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
    open={open}
    onClose={handleClose}
    sx={{ display: { xs: 'block', md: 'none' } }}
  >
    <MenuItem
      onClick={() => {
        navigate('/stocks')
        handleClose()
      }}
    >
      <Typography textAlign="center">재고현황</Typography>
    </MenuItem>
  </Menu>
)

import {
  Box,
  Button,
  useTheme,
  InputLabel,
  IconButton,
  Typography,
  FormControl,
  OutlinedInput,
  useMediaQuery,
  InputAdornment,
} from '@mui/material'
import React from 'react'
import { toast } from 'react-toastify'
import { useMainContext } from '~/context'
import { rsaEncrypt } from '~/utils/encrypt'
import { setCookie } from 'react-use-cookie'
import { fetcher, postFetcher } from '~/util'
import { useNavigate } from 'react-router-dom'
import { wrapError } from '~/components/ErrorBoundary'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export const Login: React.FC = wrapError(() => {
  const { user, update } = useMainContext()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [ID, setID] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const handleLogin = async () => {
    const encrypted = rsaEncrypt(password)
    const res = await postFetcher('/auth/login', {
      id: ID,
      password: encrypted,
    })

    if (!res || !res.success) {
      if (res?.message === 'Forbidden') {
        toast.error('이용이 제한된 계정입니다')
      } else if (res?.message === 'Not Found') {
        toast.error('아이디 또는 비밀번호가 일치하지 않습니다')
      } else {
        toast.error('로그인에 실패했습니다')
      }
    }
    if (res.body.token) {
      setCookie('Authorization', res.body.token, { days: 30 })
      const user = await fetcher('/auth/me')
      update(user.body)
      window.location.href = '/'
    }
  }

  React.useEffect(() => {
    if (user) {
      navigate('/')
    }
  })

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: isMobile ? 0 : '10px',
        marginRight: isMobile ? 0 : '10px',
      }}
    >
      <Box sx={{ width: '35vh', alignItems: 'center', mt: '3' }}>
        <Typography
          variant="h5"
          sx={{ width: '100%', textAlign: 'center', mt: 1 }}
        >
          로그인
        </Typography>
        <FormControl sx={{ width: '100%', mt: 1 }} variant="outlined">
          <InputLabel htmlFor="id">ID</InputLabel>
          <OutlinedInput
            id="outlined-adornment-id"
            label="ID"
            value={ID}
            onChange={(e) => setID(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ width: '100%', mt: 2 }} variant="outlined">
          <InputLabel htmlFor="password">비밀번호</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          size="large"
          variant="contained"
          sx={{
            width: '100%',
            mt: 2,
            bgcolor: 'var(--korail-blue)',
            color: '#fff',
          }}
          onClick={() => {
            handleLogin()
          }}
        >
          로그인
        </Button>
      </Box>
    </Box>
  )
})

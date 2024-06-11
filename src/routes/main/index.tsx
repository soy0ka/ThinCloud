import React from 'react'
import { wrapError } from '~/components/ErrorBoundary'
import ButtonStyle from '~/styles/button'
import { Box, Button, Input, useMediaQuery, useTheme } from '@mui/material'
import { postFetcher } from '~/util'
import { toast } from 'react-toastify'

export const Main: React.FC = wrapError(() => {
  const tlsRegex = /^https:\/\/tls\.kku\.ac\.kr\/local\/ubdoc\/\?.*$/
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [url, setUrl] = React.useState('')

  const handleSubmint = () => {
    if (!url) return toast.error('URL을 입력해주세요')
    if (!tlsRegex.test(url)) return toast.error('TLS 문서 링크를 입력해주세요')
    postFetcher('/download', { url }).then((res) => {
      console.log(res)
    })
  }
  return (
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
    >
      <Input
        placeholder="TLS 문서 링크를 입력하세요"
        sx={{
          width: '100%',
          borderRadius: '5px',
          padding: '10px',
          marginBottom: '10px',
        }}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button
        variant="contained"
        sx={ButtonStyle.maxed}
        onClick={() => handleSubmint()}
      >
        다운로드
      </Button>
    </Box>
  )
})

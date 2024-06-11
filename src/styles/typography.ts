export const base = {
  fontFamily: 'Apple SD Gothic Neo',
  display: { xs: 'none', md: 'flex' },
}

export const center = {
  ...base,
  justifyContent: 'center',
}

export const heading = {
  ...base,
  fontSize: '1.5rem',
  fontWeight: 700,
}

export default {
  base,
  heading,
  center,
}

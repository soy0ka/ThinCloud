export const base = {
  color: '#fff',
  bgcolor: 'var(--primary-color)',
  ':hover': {
    backgroundColor: 'var(--secondary-color)',
  },
}

export const maxed = {
  ...base,
  width: '100%',
}

export default {
  base,
  maxed,
}

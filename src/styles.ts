import { Typography, styled } from '@mui/material'
import { theme } from './theme'

export const Title = styled(Typography)({
  color: theme.palette.text.primary,
  fontWeight: 'lighter',
  letterSpacing: '10px',
  fontSize: '5vw',
  margin: '3vw'
})

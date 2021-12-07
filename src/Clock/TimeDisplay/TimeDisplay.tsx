import { styled, Typography } from '@mui/material'
import moment from 'moment'
import 'moment-timezone'
import * as React from 'react'

interface TimeDisplayProps {
  time: Date
  format: string
  timezone: string
}

const DigitalClock = styled(Typography)({
  fontFamily: 'Orbitron',
  color: 'rgb(40, 182, 27)',
  fontSize: '10vw',
  marginBlockEnd: '0em',
  marginBlockStart: '0em'
})

export const TimeDisplay = ({ time, format, timezone }: TimeDisplayProps) => (
  <DigitalClock>{moment.tz(time, timezone).format(format)}</DigitalClock>
)

import { styled, Typography } from '@mui/material'
import moment from 'moment'
import 'moment-timezone'
import * as React from 'react'

interface PartOfDayProps {
  time: Date
  timezone: string
}

const Information = styled(Typography)({
  fontWeight: 'lighter',
  color: 'lightgray',
  fontSize: '2vw'
})

const partAt = (time: Date, timezone: string) => {
  const hour = moment.tz(time, timezone).hour()

  if (hour >= 5 && hour < 12) {
    return 'morning'
  } else if (hour >= 12 && hour < 17) {
    return 'afternoon'
  } else if (hour >= 17 && hour < 21) {
    return 'evening'
  }
  return 'night'
}

export const PartOfDay = ({ time, timezone }: PartOfDayProps) => (
  <Information>It is {partAt(time, timezone)}</Information>
)

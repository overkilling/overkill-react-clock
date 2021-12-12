import { Container } from '@mui/material'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { CombinedState } from '../../../types'
import { PartOfDay, TimeDisplay } from '../../molecules'

export const Clock = () => {
  const time = useSelector((state: CombinedState) => state.clock.time)
  const { format, timezone } = useSelector(
    (state: CombinedState) => state.configuration
  )
  const props = { time, format, timezone }

  return (
    <Container>
      <TimeDisplay {...props} />
      <PartOfDay {...props} />
    </Container>
  )
}

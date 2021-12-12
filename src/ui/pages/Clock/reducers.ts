import type { UpdateClockAction } from './actions'
import { ClockState } from './types'

const initialState = {
  time: new Date()
}

export const timeKeeper = (
  state: ClockState = initialState,
  { type, time }: UpdateClockAction
): ClockState => {
  switch (type) {
    case 'UPDATE_CLOCK':
      return { time }
    default:
      return state
  }
}

export default timeKeeper

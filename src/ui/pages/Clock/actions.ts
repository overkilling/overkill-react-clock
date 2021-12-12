export type UpdateClock = 'UPDATE_CLOCK'

export interface UpdateClockAction {
  type: UpdateClock
  time: Date
}

export const updateClock = (newTime: Date): UpdateClockAction => ({
  type: 'UPDATE_CLOCK',
  time: newTime
})

import { Format } from './types'

export type UpdateFormat = 'UPDATE_FORMAT'

export interface UpdateFormatAction {
  type: UpdateFormat
  format: Format
}

export const updateFormat = (newFormat: Format): UpdateFormatAction => ({
  type: 'UPDATE_FORMAT',
  format: newFormat
})

export type UpdateTimezone = 'UPDATE_TIMEZONE'

export interface UpdateTimezoneAction {
  type: UpdateTimezone
  timezone: string
}

export const updateTimezone = (newTimezone: string): UpdateTimezoneAction => ({
  type: 'UPDATE_TIMEZONE',
  timezone: newTimezone
})

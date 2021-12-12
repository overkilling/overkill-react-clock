import { ClockState } from './ui/pages/Clock/types'
import { ConfigurationState } from './ui/pages/Configuration/types'

export interface CombinedState {
  clock: ClockState
  configuration: ConfigurationState
}

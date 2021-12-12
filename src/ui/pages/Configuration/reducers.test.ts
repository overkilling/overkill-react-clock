import reducer from './reducers'
import { updateFormat, updateTimezone } from './actions'
import { ConfigurationState } from './types'

describe('Reducer', () => {
  it('has initial state', () => {
    const initialState = reducer(undefined, {} as any)

    expect(initialState.format).toEqual('HH:mm:ss')
  })

  it('updates with new format', () => {
    const state = {
      format: 'HH:mm:ss',
      timezone: 'Some timezone'
    } as ConfigurationState
    const newFormat = 'h:mm a'
    const action = updateFormat(newFormat)

    expect(reducer(state, action).format).toEqual(newFormat)
  })

  it('updates with new timezone', () => {
    const state = {
      format: 'HH:mm:ss',
      timezone: 'Initial'
    } as ConfigurationState
    const newTimezone = 'New'
    const action = updateTimezone(newTimezone)

    expect(reducer(state, action).timezone).toEqual(newTimezone)
  })
})

import reducer from './reducers'
import { updateClock } from './actions'

describe('Reducer', () => {
  it('has initial state', () => {
    expect(reducer(undefined, {} as any).time).toBeDefined()
  })

  it('updates with latest time', () => {
    const state = {
      time: new Date(2017, 12, 31)
    }
    const newTime = new Date()
    const action = updateClock(newTime)

    expect(reducer(state, action)).toEqual({
      time: newTime
    })
  })
})

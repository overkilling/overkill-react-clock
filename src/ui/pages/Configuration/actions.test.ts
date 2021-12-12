import { updateFormat, updateTimezone } from './actions'

describe('Actions', () => {
  it('return action for UPDATE_FORMAT', () => {
    const action = updateFormat('h:mm a')

    expect(action).toEqual({
      type: 'UPDATE_FORMAT',
      format: 'h:mm a'
    })
  })

  it('return action for UPDATE_TIMEZONE', () => {
    const action = updateTimezone('some-timezone')

    expect(action).toEqual({
      type: 'UPDATE_TIMEZONE',
      timezone: 'some-timezone'
    })
  })
})

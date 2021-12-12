import saga from './sagas'
import { delay } from 'redux-saga/effects'

describe('Saga', () => {
  it('tick clock every second', () => {
    const gen = saga()

    expect(gen.next().value).toMatchObject({
      type: 'PUT',
      payload: { action: { type: 'UPDATE_CLOCK' } }
    })
    expect(gen.next().value).toEqual(delay(1000))
  })
})

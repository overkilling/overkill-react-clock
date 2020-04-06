import 'regenerator-runtime/runtime'
import { put, delay } from 'redux-saga/effects'
import { updateClock } from '../actions/updateClock'

export function* tickClock() {
  while (true) {
    yield put(updateClock(new Date()))
    yield delay(1000)
  }
}

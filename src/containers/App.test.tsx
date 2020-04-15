import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from '@testing-library/react'
import { App } from './App'
import { timeKeeper } from '../reducers/timeKeeper'

describe('App', () => {
  const testStore = createStore(timeKeeper)

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={testStore}>
        <App></App>
      </Provider>,
      div
    )
    expect(div.textContent).toContain('Overkill React Clock')
  })

  it('updates on UPDATE_CLOCK action', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <App></App>
      </Provider>
    )
    const date = new Date(2018, 2, 11, 16, 30, 7)

    testStore.dispatch({
      type: 'UPDATE_CLOCK',
      time: date
    })

    expect(getByText(date.toLocaleTimeString())).toBeInTheDocument()
    expect(getByText('It is afternoon')).toBeInTheDocument()
  })
})

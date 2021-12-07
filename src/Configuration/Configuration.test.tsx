import * as React from 'react'
import configureStore from 'redux-mock-store'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { Configuration } from './Configuration'
import { updateFormat, updateTimezone } from './actions'
import { createTheme, ThemeProvider } from '@mui/material'

describe('Configuration component', () => {
  let mockStore = configureStore([])({ clock: {}, configuration: {} })

  const renderComponent = () =>
    render(
      <Provider store={mockStore}>
        <ThemeProvider theme={createTheme()}>
          <Configuration open={true} />
        </ThemeProvider>
      </Provider>
    )

  beforeEach(() => {
    mockStore = configureStore([])({ clock: {}, configuration: {} })
  })

  it('matches snapshot', () => {
    const { asFragment } = renderComponent()

    expect(asFragment()).toMatchSnapshot()
  })

  describe('format', () => {
    it('renders format selector', () => {
      const { getByText } = renderComponent()

      expect(getByText('HH:mm:ss')).toBeInTheDocument()
      expect(getByText('h:mm:ss A')).toBeInTheDocument()
      expect(getByText('HH:mm')).toBeInTheDocument()
      expect(getByText('h:mm A')).toBeInTheDocument()
    })

    it('dispatches action when selecting format', () => {
      const { getByLabelText } = renderComponent()

      fireEvent.change(getByLabelText('Format'), {
        target: {
          value: 'HH:mm'
        }
      })

      expect(mockStore.getActions()).toEqual([updateFormat('HH:mm')])
    })
  })

  describe('timezone', () => {
    it('renders timezone selector', () => {
      const { getByText } = renderComponent()

      expect(getByText('America/Los_Angeles')).toBeInTheDocument()
      expect(getByText('Zulu')).toBeInTheDocument()
    })

    it('dispatches action when selecting timezone', () => {
      const { getByLabelText } = renderComponent()

      fireEvent.change(getByLabelText('Timezone'), {
        target: {
          value: 'Zulu'
        }
      })

      expect(mockStore.getActions()).toEqual([updateTimezone('Zulu')])
    })
  })
})

import * as React from 'react'
import configureStore from 'redux-mock-store'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
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
      renderComponent()

      expect(screen.getByText('HH:mm:ss')).toBeInTheDocument()
      expect(screen.getByText('h:mm:ss a')).toBeInTheDocument()
      expect(screen.getByText('HH:mm')).toBeInTheDocument()
      expect(screen.getByText('h:mm a')).toBeInTheDocument()
    })

    it('dispatches action when selecting format', () => {
      renderComponent()

      userEvent.selectOptions(screen.getByLabelText('Format'), 'HH:mm')

      expect(mockStore.getActions()).toEqual([updateFormat('HH:mm')])
    })
  })

  describe('timezone', () => {
    it('renders timezone selector', () => {
      renderComponent()

      expect(screen.getByText('America/Los_Angeles')).toBeInTheDocument()
      expect(screen.getByText('Europe/London')).toBeInTheDocument()
    })

    it('dispatches action when selecting timezone', () => {
      renderComponent()

      userEvent.selectOptions(
        screen.getByLabelText('Timezone'),
        'Europe/London'
      )

      expect(mockStore.getActions()).toEqual([updateTimezone('Europe/London')])
    })
  })
})

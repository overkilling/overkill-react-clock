import * as React from 'react'
import { TimeDisplay } from './TimeDisplay'
import { render, screen } from '@testing-library/react'

describe('TimeDisplay component', () => {
  it('contains the specified time', () => {
    const date = new Date(2018, 2, 11, 11, 49, 13)
    render(
      <TimeDisplay time={date} format="hh:mm a" timezone="Europe/London" />
    )

    expect(screen.getByText('11:49 AM')).toBeInTheDocument()
  })
})

import { render } from '@testing-library/react'
import * as React from 'react'
import { PartOfDay } from './PartOfDay'

describe('PartOfDay component', () => {
  const componentAtTime = (
    hour: number,
    minute: number,
    timezone: string = 'Europe/London'
  ) => {
    const { container } = render(
      <PartOfDay
        time={new Date(2018, 2, 6, hour, minute, 0)}
        timezone={timezone}
      />
    )
    return container.textContent
  }

  it('displays morning at the beginning of morning (5am)', () => {
    expect(componentAtTime(5, 0)).toBe('It is morning')
  })

  it('displays morning at the middle of morning', () => {
    expect(componentAtTime(9, 32)).toBe('It is morning')
  })

  it('displays morning at the end of morning (11:59am)', () => {
    expect(componentAtTime(11, 59)).toBe('It is morning')
  })

  it('displays afternoon at the beginning of afternoon (12pm)', () => {
    expect(componentAtTime(12, 0)).toBe('It is afternoon')
  })

  it('displays afternoon at the middle of afternoon', () => {
    expect(componentAtTime(15, 12)).toBe('It is afternoon')
  })

  it('displays afternoon at the end of afternoon (4:59pm)', () => {
    expect(componentAtTime(16, 59)).toBe('It is afternoon')
  })

  it('displays evening at the beginning of evening (5pm)', () => {
    expect(componentAtTime(17, 0)).toBe('It is evening')
  })

  it('displays evening at the middle of evening', () => {
    expect(componentAtTime(19, 29)).toBe('It is evening')
  })

  it('displays evening at the end of evening (8:59pm)', () => {
    expect(componentAtTime(20, 59)).toBe('It is evening')
  })

  it('displays night at the beginning of night (9pm)', () => {
    expect(componentAtTime(21, 0)).toBe('It is night')
  })

  it('displays night at the middle of night', () => {
    expect(componentAtTime(3, 54)).toBe('It is night')
  })

  it('displays night at the end of night (4:59am)', () => {
    expect(componentAtTime(4, 59)).toBe('It is night')
  })

  it('displays at a given timezone', () => {
    expect(componentAtTime(4, 59, 'Pacific/Niue')).toBe('It is evening')
  })
})

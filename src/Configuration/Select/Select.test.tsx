import * as React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { Select } from './Select'

describe('Select component', () => {
  const items = ['item1', 'item2', 'item3']
  const onSelectionMock = jest.fn()

  describe('rendering', () => {
    it('renders name', () => {
      render(
        <Select name="Some Name" items={items} onSelection={onSelectionMock} />
      )

      expect(screen.getByText('Some Name')).toBeInTheDocument()
    })

    it('renders a select input with a list of items', () => {
      render(
        <Select name="Some Name" items={items} onSelection={onSelectionMock} />
      )

      expect(screen.getByText('item1')).toBeInTheDocument()
      expect(screen.getByText('item2')).toBeInTheDocument()
      expect(screen.getByText('item3')).toBeInTheDocument()
    })
  })

  describe('selected element', () => {
    it('defaults to first item when no selected element provided', () => {
      render(
        <Select name="Some Name" items={items} onSelection={onSelectionMock} />
      )

      const select = screen.getByLabelText('Some Name') as HTMLSelectElement
      expect(select.value).toEqual('item1')
    })

    it('selected provided element', () => {
      render(
        <Select
          name="Some Name"
          items={items}
          selected="item2"
          onSelection={onSelectionMock}
        />
      )

      const select = screen.getByLabelText('Some Name') as HTMLSelectElement
      expect(select.value).toEqual('item2')
    })
  })

  describe('onSelection', () => {
    it('trigger onSelection action when selected', () => {
      render(
        <Select name="Some Name" items={items} onSelection={onSelectionMock} />
      )

      const select = screen.getByLabelText('Some Name') as HTMLSelectElement
      userEvent.selectOptions(select, 'item3')

      expect(select.value).toEqual('item3')
      expect(onSelectionMock).toHaveBeenCalledWith('item3')
    })
  })
})

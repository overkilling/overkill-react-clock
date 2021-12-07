import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  SelectChangeEvent
} from '@mui/material'
import * as React from 'react'
import { useState } from 'react'

interface SelectProps {
  name: string
  items: string[]
  selected?: string
  onSelection: (selected: string) => void
}

const optionsFrom = (items: string[]) => {
  return items.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ))
}

export const Select = ({ name, items, selected, onSelection }: SelectProps) => {
  const selectId = name.toLowerCase().replace(' ', '_')
  const [selectedItem, setSelectedItem] = useState(selected)
  const onChange = (event: SelectChangeEvent<unknown>) => {
    const stringValue = event.target.value as string
    setSelectedItem(stringValue)
    onSelection(stringValue)
  }

  return (
    <FormControl>
      <InputLabel htmlFor={selectId}>{name}</InputLabel>
      <MuiSelect native id={selectId} value={selectedItem} onChange={onChange}>
        {optionsFrom(items)}
      </MuiSelect>
    </FormControl>
  )
}

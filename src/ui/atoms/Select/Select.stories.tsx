import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Select } from './Select'

const items = ['Some option', 'Another option', 'Yet another option']

storiesOf('Select', module)
  .add('Without selected item', () => (
    <Select
      name="Sample select"
      items={items}
      onSelection={action('selected')}
    />
  ))
  .add('With selected item', () => (
    <Select
      name="Sample select"
      items={items}
      selected={items[1]}
      onSelection={action('selected')}
    />
  ))

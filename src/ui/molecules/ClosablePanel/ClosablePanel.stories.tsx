import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ClosablePanel } from './ClosablePanel'

storiesOf('ClosablePanel', module)
  .add('closed ', () => (
    <ClosablePanel title="Closed" open={false}>
      Inside the panel
    </ClosablePanel>
  ))
  .add('open ', () => (
    <ClosablePanel title="Open" open={true}>
      Inside the panel
    </ClosablePanel>
  ))

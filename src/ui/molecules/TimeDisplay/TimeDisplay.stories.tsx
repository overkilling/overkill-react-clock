import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { TimeDisplay } from './TimeDisplay'

storiesOf('TimeDisplay', module).add('with now date', () => (
  <TimeDisplay time={new Date()} format="HH:mm:ss" timezone="Europe/London" />
))

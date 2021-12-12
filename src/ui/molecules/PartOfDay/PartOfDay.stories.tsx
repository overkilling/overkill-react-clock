import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { PartOfDay } from './PartOfDay'

storiesOf('PartOfDay', module)
  .add('with now date', () => (
    <PartOfDay time={new Date()} timezone="Europe/London" />
  ))
  .add('in the morning', () => (
    <PartOfDay time={new Date(2020, 1, 1, 10, 0, 0)} timezone="Europe/London" />
  ))
  .add('in the afternoon', () => (
    <PartOfDay time={new Date(2020, 1, 1, 13, 0, 0)} timezone="Europe/London" />
  ))
  .add('in the evening', () => (
    <PartOfDay time={new Date(2020, 1, 1, 19, 0, 0)} timezone="Europe/London" />
  ))
  .add('in the night', () => (
    <PartOfDay time={new Date(2020, 1, 1, 23, 0, 0)} timezone="Europe/London" />
  ))

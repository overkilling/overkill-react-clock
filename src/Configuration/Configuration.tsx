import SettingsIcon from '@mui/icons-material/Settings'
import moment from 'moment'
import 'moment-timezone'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CombinedState } from '../types'
import { updateFormat, updateTimezone } from './actions'
import { ClosablePanel } from './ClosablePanel'
import { Select } from './Select'
import { Format } from './types'

const formats: Format[] = ['HH:mm:ss', 'h:mm:ss A', 'HH:mm', 'h:mm A']

interface ConfigurationProps {
  open?: boolean
}

export const Configuration = ({ open = false }: ConfigurationProps) => {
  const { format, timezone } = useSelector(
    (state: CombinedState) => state.configuration
  )
  const dispatch = useDispatch()

  const onFormatSelection = (selected: string) =>
    dispatch(updateFormat(selected as Format))
  const onTimezoneSelection = (selected: string) =>
    dispatch(updateTimezone(selected))

  return (
    <ClosablePanel title="Configuration" icon={<SettingsIcon />} open={open}>
      <Select
        name="Format"
        items={formats}
        selected={format || formats[0]}
        onSelection={onFormatSelection}
      />
      <Select
        name="Timezone"
        items={moment.tz.names()}
        selected={timezone || moment.tz.guess()}
        onSelection={onTimezoneSelection}
      />
    </ClosablePanel>
  )
}

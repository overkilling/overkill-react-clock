import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface ClosablePanelProps {
  title: string
  icon?: IconDefinition
  open: boolean
  children?: React.ReactNode
}
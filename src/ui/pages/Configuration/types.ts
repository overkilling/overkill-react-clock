export type Format = 'HH:mm:ss' | 'h:mm:ss a' | 'HH:mm' | 'h:mm a'

export interface ConfigurationState {
  format: Format
  timezone: string
}

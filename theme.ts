import { createTheme } from '@rneui/themed'

declare module '@rneui/themed' {
  export interface Colors {
    errorRed: string
  }
}

export const theme = createTheme({
  lightColors: {
    primary: '#7393DD',
    background: '#FFFFFF',
    errorRed: '#CC0000',
  },
})

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export type DefaultTheme = ThemeType
  // previous version export interface DefaultTheme extends ThemeType {}
}

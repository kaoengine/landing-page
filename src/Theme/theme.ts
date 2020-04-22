import palx from 'palx'
import { includes, get } from 'lodash'

const red = '#e42d42'
const blue = '#2d9ce4'
export const palette = palx(blue)

export const grays = {
  darker: '#121217',
  dark: '#17171d',
  black: palette.black,
  slate: palette.gray[8],
  silver: palette.gray[7],
  smoke: palette.gray[2],
  snow: palette.gray[0],
  white: '#ffffff',
}

export const brand = {
  primary: red,
  accent: palette.indigo[4],
  success: palette.teal[5],
  info: palette.blue[5],
  warning: palette.orange[5],
  error: palette.red[7],
  muted: grays.silver,
}

export const colors = {
  ...brand,
  ...grays,
  ...palette,
}

export const cx = (key: any) => get(colors, key, key)

const createMediaQuery = (n: Number) => `@media screen and (min-width:${n}em)`

const addAliases = (arr: Array<any>, aliases: any) =>
  aliases.forEach((key: any, i: number) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      },
    })
  )

const aliases = ['sm', 'md', 'lg', 'xl']
export const breakpoints = [32, 48, 64, 80]

export const mediaQueries = {
  ...breakpoints.map(createMediaQuery),
  reduceMotion: '@media (prefers-reduced-motion: reduce)',
  reduceTransparency: '@media (prefers-reduced-transparency: reduce)',
}

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

export const space = [0, 6, 12, 18, 24, 36, 72, 108, 144, 288, 432]

const emoji = '"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
export const font = `"Phantom Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif,${emoji}`
export const mono = 'SFMono-Regular,"Roboto Mono",Menlo,monospace'

export const fontSizes = [13.5, 16, 18, 24, 27, 36, 48, 54, 72, 96]

export const regular = 'regular'
export const bold = 'bold'

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = { regular, bold }

export const scaleFactor = 17 / 16
export const transition = `${3 / 16}s cubic-bezier(0.375, 0, 0.675, 1)`

// styled-system’s `borderRadius` function can hook into the `radii` object/array
export const pill = '9999px'
export const radii = ['0px', '4px', '8px', '16px', pill]
export const radius = '4px'

export const shadowColor = 'rgba(0,0,0,0.125)'
export const baseShadow = '0 0 2px 0 rgba(0,0,0,.0625),'
export const boxShadows = [
  baseShadow + `0 2px 4px 0 ${shadowColor}`,
  baseShadow + `0 4px 8px 0 ${shadowColor}`,
  baseShadow + `0 12px 12px 0 ${shadowColor}`,
  baseShadow + `0 24px 24px 0 ${shadowColor}`,
]

export const hexa = (color: any, alpha: any) => {
  const hex = cx(color)
  if (!includes(hex, '#')) return shadowColor
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

export const gradient = (color1: any, color2: any) =>
  `radial-gradient(
    ellipse farthest-corner at top left,
    ${cx(color1)} 0%, ${cx(color2)} 100%
  )`

const theme = {
  breakpoints,
  mediaQueries,
  space,
  mono,
  font,
  fontSizes,
  fontWeights,
  regular,
  bold,
  colors,
  radii,
  radius,
  pill,
  scaleFactor,
  transition,
  boxShadows,
  shadowColor,
  cx,
  hexa,
  gradient,
}

export default theme

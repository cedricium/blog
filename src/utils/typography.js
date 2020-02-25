import Typography from 'typography'
import GitHub from 'typography-theme-github'

GitHub.headerWeight = 800

GitHub.overrideThemeStyles = () => ({
  h1: { border: 'none' },
  hr: { margin: '1.75rem 0' },
  a: { color: '#007bff' },
})

const typography = new Typography(GitHub)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

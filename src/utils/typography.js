import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  'a': {
    color: '#007bff'
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'h1,h2,h3': {
    fontFamily: ['Source Sans Pro','system,system-ui','-apple-system','BlinkMacSystemFont','Roboto','Helvetica','Arial','sans-serif'].join(','),
  }
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
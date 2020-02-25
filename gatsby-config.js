module.exports = {
  siteMetadata: {
    title: 'My Random Thoughts',
    author: 'Cedric Amaya',
    description: 'Essays, musings, and more by Cedric Amaya.',
    siteUrl: 'https://cedric.tech/blog',
  },
  pathPrefix: '/blog',
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Random Thoughts`,
        short_name: `Thoughts`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#007bff`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: (site.siteMetadata.siteUrl + edge.node.path).replace(/\/blog\/blog\//g, '/blog/'),
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    },
  ],
}

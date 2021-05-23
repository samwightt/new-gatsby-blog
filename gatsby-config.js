module.exports = {
  siteMetadata: {
    title: 'Sam Wight'
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md']
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './data/'
      },
      __key: 'pages'
    },
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'ybt4qkt'
        }
      }
    }
  ]
}

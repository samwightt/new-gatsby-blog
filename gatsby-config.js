module.exports = {
  siteMetadata: {
    title: 'Sam Wight',
    description:
      'Senior software engineer at The Nine. CS student at The University of Alabama. Writes about programming, design, politics, and systems.',
    url: 'https://samw.dev',
    twitterUsername: '@samwightt',
    heading: 'Sam Wight',
    tagline:
      'Senior software engineer at The Nine specializing in JS/TS, Rust, and Elixir. Computer science student at The University of Alabama. Writes about software, design, politics, and systems.'
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'images/icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './images/'
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
    'gatsby-plugin-emotion',
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

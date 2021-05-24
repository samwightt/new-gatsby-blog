const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(filter: { frontmatter: { published: { eq: true } } }) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `)

  if (result.data === undefined) return
  console.log(result)
  result.data.allMdx.nodes.forEach(item => {
    createPage({
      path: `/blog/${item.frontmatter.slug.replace(/^\//, '')}`,
      component: path.resolve(__dirname, './src/templates/Post.tsx'),
      context: {
        id: item.id
      }
    })
  })
}

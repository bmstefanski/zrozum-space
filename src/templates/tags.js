import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import BlogRoll from '../components/BlogRoll'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title

    return (
      <Layout>
        <Helmet title={`${tag} | ${title}`} />
        <PageHeader title={`Artykuły #${tag}`} />
        <BlogRoll posts={posts} />
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

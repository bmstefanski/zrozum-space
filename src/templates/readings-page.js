import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import Flex from '../components/Flex'
import Layout from '../components/Layout'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'

export const ReadingsPageTemplate = ({ books }) => {
  return (
    <Page>
      <PageHeader title="Polecane książki" />
      <Flex flexWrap="wrap">
        {books.map((book) => (
          <Book key={book.name}>
            <Img fluid={book.image.childImageSharp.fluid} alt={book.name} />
            <a href={book.link}>{book.name}</a>
          </Book>
        ))}
      </Flex>
    </Page>
  )
}

const Book = styled.article`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 36rem;
  font-size: 1.4rem;
  margin: 2.5rem;
  overflow: hidden;
  a {
    margin-top: 1rem;
  }
`

const ReadingsPage = ({
  data: {
    allBook: { nodes: books },
  },
}) => {
  return (
    <Layout>
      <ReadingsPageTemplate books={books} />
    </Layout>
  )
}

export default ReadingsPage

export const readingsPageQuery = graphql`
  query {
    allBook {
      nodes {
        id
        image {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        name
        link
      }
    }
  }
`

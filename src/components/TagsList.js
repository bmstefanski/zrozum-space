import { graphql, Link, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'
import React from 'react'
import styled from 'styled-components'

const TagsListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;

  & > * {
    margin-right: 2rem;
  }

  li {
    font-size: 1.5rem;

    a {
      text-decoration: none;
      color: #5e81ac;

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      font-weight: bold;
    }

    &::before {
      content: '';
      width: 2rem;
      height: 2rem;
      background-color: red;
    }
  }
`

const TagsList = ({ tags, fetched: isFetched }) => {
  const currentTags = isFetched ? tags : tags.map((tag) => ({ fieldValue: tag }))
  console.log(currentTags)

  return (
    <TagsListWrapper>
      {currentTags.map((tag) => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            #{tag.fieldValue} {isFetched && <span>({tag.totalCount})</span>}
          </Link>
        </li>
      ))}
    </TagsListWrapper>
  )
}

export default ({ tags }) =>
  tags ? (
    <TagsList tags={tags} />
  ) : (
    <StaticQuery
      query={graphql`
        query TagsQuery {
          allMarkdownRemark {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={({ allMarkdownRemark: { group: tags } }) => <TagsList tags={tags} fetched />}
    />
  )
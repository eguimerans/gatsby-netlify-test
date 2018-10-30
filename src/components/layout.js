import React from "react"
import { css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title,
            pmc
          }
        }
      }
    `
    }

  render={data => (
  <div
    className={css`
      margin: 0 auto;
      max-width: 700px;
      padding: 20px;
      padding-top: 15px;
    `}
  >
    <Link to={`/`}>
      <h3
        className={css`
          margin-bottom: 20px;
          display: inline-block;
          font-style: normal;
        `}
      >
        {data.site.siteMetadata.title} - (PMC: {data.site.siteMetadata.pmc})
      </h3>
    </Link>
    <Link
      to={`/about/`}
      className={css`
        float: right;
      `}
    >
      About
    </Link>
    {children}
  </div>
      )}
      />
)

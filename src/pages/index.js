import React from "react"
import { css } from "react-emotion"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)



  return (
    <Layout>
      <div>
        <h1
          className={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
          <Link
              to={node.fields.slug}
              className={css`
                text-decoration: none;
                color: inherit;
              `
}
            >
            <h3
              className={css`
                margin-bottom: 5px;
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                className={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <h3>Testin form</h3>
        <div>
        <h1>Contact</h1>
        <form
          name="contact"
          method="POST"
          /*action="/about/"*/
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field"/>
            </label>
          </p>
          <p>
            <label>
              Your name:<input type="text" name="name" />
            </label>
            <label>
              Your phone:<input type="phone" name="phone" />
            </label>
            <label>
              Your message:<input type="text" name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

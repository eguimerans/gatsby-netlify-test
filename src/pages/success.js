import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ( {data} ) => (
  <Layout>
    <h3>Thankx for reaching us out!!</h3>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

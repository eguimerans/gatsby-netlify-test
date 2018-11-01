import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ( {data} ) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We are the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
    <h3>Testin form</h3>
    <form action="./about" name="sms" method="POST" netlify>
    <p>
      <label>Your Name: <input type="text" name="name" /></label>
    </p>
    <p>
      <label>Your Phone: <input type="phone" name="phone" /></label>
      </p>
    <p>
      <label>Your message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
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

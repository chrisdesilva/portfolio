import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="bg-green">
      <h1 className="text-center">Hey. I'm Chris DeSilva.</h1>
      <p className="text-center my-5">I learned to code while teaching middle school.</p>  
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    haleakala: file(relativePath: { eq: "Haleakala.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="bg-purple sm:bg-green md:bg-blue">
      <h1>Hey. I'm Chris DeSilva.</h1>  
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

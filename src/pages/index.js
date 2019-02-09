import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="flex flex-col h-screen items-center py-8">
      <h1 className="text-center text-3xl lg:text-5xl">Hey. I'm Chris DeSilva.</h1>
      <h2 className="text-left text-lg lg:text-lg font-normal p-5">I learned to code while teaching middle school. Now I nerd out in front of computer screens.</h2>  
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

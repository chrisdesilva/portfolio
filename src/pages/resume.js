import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const ResumePage = (props) => (
  <Layout>
    <SEO title="resume" keywords={[`gatsby`, `application`, `react`]} />
    <div
      className="mx-auto my-5 max-w-xl" 
    >
      <Img fluid={props.data.resume.childImageSharp.fluid} />
    </div>
  </Layout>
)

export default ResumePage

export const pageQuery = graphql`
  query {
    resume: file(relativePath: { eq: "resume.png" }) {
      childImageSharp {
        fluid (maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

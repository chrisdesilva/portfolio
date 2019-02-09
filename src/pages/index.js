import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `portfolio`, `react`]} />
    <div className="flex flex-col h-64 justify-center items-center">
      <h1 className="text-left text-3xl lg:text-5xl">Hey, I'm Chris DeSilva.</h1>
      <h2 className="text-left text-lg font-normal p-5">I learned to code while teaching middle school. Now I nerd out in front of computer screens.</h2>  
    </div>
    <div className="flex flex-col h-64 justify-center items-center h-64 bg-green">
      <h2 className="text-left text-3xl font-normal p-2 text-black">Get in touch!</h2>
      <h2 className="text-left text-xl font-normal p-2">
        <a 
          href="mailto:chris.a.desilva@gmail.com" 
          css={{
            textDecoration: `none`,
            color: `black`,
            transition: `all 300ms ease-in-out`,
            ':hover': {
              color: `white`
            }
          }}
        >
          chris.a.desilva@gmail.com
        </a>
      </h2>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    mountain: file(relativePath: { eq: "mountain.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

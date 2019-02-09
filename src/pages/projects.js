import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'

const ProjectsPage = (props) => (
  <Layout>
    <SEO title="Projects" />
    <h1 className="text-center">Projects</h1>
    <div className="flex flex-col justify-around lg:flex-row m-5">
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-5 my-5">
      <Img className="w-full" fluid={props.data.album.childImageSharp.fluid} alt="Sunset over water" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">thebanistersmusic.com</div>
        <p className="text-grey-darker text-base">
          Band website
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#bootstrap</span>
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#css</span>
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#javascript</span>
      </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 ">
      <Img className="w-full" fluid={props.data.album.childImageSharp.fluid} alt="Sunset over water" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">thebanistersmusic.com</div>
        <p className="text-grey-darker text-base">
          Band website
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#bootstrap</span>
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#css</span>
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#javascript</span>
      </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
      <Img className="w-full" fluid={props.data.album.childImageSharp.fluid} alt="Sunset over water" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">thebanistersmusic.com</div>
        <p className="text-grey-darker text-base">
          Band website
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#bootstrap</span>
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#css</span>
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#javascript</span>
      </div>
    </div>
    </div>
  </Layout>
)

export default ProjectsPage

export const pageQuery = graphql`
  query {
    album: file(relativePath: { eq: "BlankDH.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


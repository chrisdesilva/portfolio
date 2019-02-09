import React from "react"
import { graphql } from "gatsby"
import { FaChrome, FaGithub } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const ProjectsPage = (props) => (
  <Layout>
    <SEO title="Projects" />
    <div className="flex flex-col justify-around lg:flex-row m-5">
      <div className="w-auto lg:w-full rounded overflow-hidden shadow-lg mx-5 my-5">
        <Img className="w-full" fluid={props.data.album.childImageSharp.fluid} alt="Sunset over water" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">thebanistersmusic.com</div>
          <p className="text-grey-darker text-base">
           Band website built with HTML, Bootstrap, and JavaScript
          </p>
        </div>
        <div className="px-6 py-4 text-center">
          <a 
            href="https://github.com/chrisdesilva/The-Banisters-Website" 
            target="_blank"
            className="mr-5"
          >
            <FaGithub 
              className="text-3xl" 
              css={{
                color: `black`,
                transition: `color 300ms ease`,
                ':hover': {
                  color: `#51d88a`
                }
              }}
            />
          </a>
          <a 
            href="https://www.thebanistersmusic.com" 
            target="_blank"
            className="mr-5"
              css={{
                color: `black`
              }}
          >
            <FaChrome 
              className="text-3xl" 
              css={{
                color: `black`,
                transition: `color 300ms ease`,
                ':hover': {
                  color: `#51d88a`
                }
              }}  
            />
          </a>
        </div>
      </div>
      <div className="w-auto lg:w-full rounded overflow-hidden shadow-lg mx-5 my-5">
        <Img className="w-full" fluid={props.data.booking.childImageSharp.fluid} alt="Sunset over water" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">mouph.com</div>
          <p className="text-grey-darker text-base">
           Mouphtaou Artist Management booking agency website built with React
          </p>
        </div>
        <div className="px-6 py-4 text-center">
          <a 
            href="https://github.com/chrisdesilva/mouph-react-app" 
            target="_blank"
            className="mr-5"
          >
            <FaGithub 
              className="text-3xl"
              css={{
                color: `black`,
                transition: `color 300ms ease`,
                ':hover': {
                  color: `#51d88a`
                }
              }} 
            />
          </a>
          <a 
            href="https://www.mouph.com" 
            target="_blank"
            className="mr-5"
          >
            <FaChrome 
              className="text-3xl" 
              css={{
                color: `black`,
                transition: `color 300ms ease`,
                ':hover': {
                  color: `#51d88a`
                }
              }}
            />
          </a>
        </div>
      </div>
      <div className="w-auto lg:w-full rounded overflow-hidden shadow-lg mx-5 my-5">
        <Img className="w-full" fluid={props.data.math.childImageSharp.fluid} alt="Sunset over water" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Math Practice</div>
          <p className="text-grey-darker text-base">
            Web app built with React for students to practice basic math facts
          </p>
        </div>
        <div className="px-6 py-4 text-center">
          <a 
            href="https://github.com/chrisdesilva/math-flashcards-react-app" 
            target="_blank"
            className="mr-5"
          >
            <FaGithub 
              className="text-3xl"
              css={{
                color: `black`,
                transition: `color 300ms ease`,
                ':hover': {
                  color: `#51d88a`
                }
              }} 
            />
          </a>
        </div>
      </div>
      <div className="w-auto lg:w-full rounded overflow-hidden shadow-lg mx-5 my-5">
        <Img className="w-full" fluid={props.data.beer.childImageSharp.fluid} alt="Sunset over water" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Math Practice</div>
          <p className="text-grey-darker text-base">
            Web app built with the MERN stack for reviewing beers
          </p>
        </div>
        <div className="px-6 py-4 text-center">
          <a 
            href="https://github.com/chrisdesilva/beer-mustache" 
            target="_blank"
            className="mr-5"
          >
            <FaGithub 
              className="text-3xl"
              css={{
                color: `black`,
                transition: `color 300ms ease`,
                ':hover': {
                  color: `#51d88a`
                }
              }}
            />
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default ProjectsPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 500, maxHeight: 500) {
      ...GatsbyImageSharpFluid
    }
  }
}
`

export const pageQuery = graphql`
  query{
    album: file(relativePath: { eq: "BlankDH.jpg" }) {
      ...fluidImage
    }
    booking: file(relativePath: { eq: "booking.jpg" }) {
      ...fluidImage
    }
    math: file(relativePath: { eq: "math.jpg" }) {
      ...fluidImage
    }
    beer: file(relativePath: { eq: "beer.jpg" }) {
      ...fluidImage
    }
  }
`


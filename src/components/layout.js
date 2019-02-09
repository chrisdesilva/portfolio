import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { FaRegEnvelope, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          css={{
            margin: `0 auto`,
            paddingTop: 0,
            display: `grid`,
            gridTemplateColumns: `1fr`,
            justifyContent: `center`,
          }}
          className="font-sans tracking-wide px-0"
        >
          <main>{children}</main>
          <footer 
            className="flex flex-col justify-center items-center w-full h-32 text-white bg-blue-darkest"  
          >
          <div className="text-center">
            © {new Date().getFullYear()} Chris DeSilva - Built with<a className="no-underline text-white" href="https://www.gatsbyjs.org"> Gatsby</a>            
          </div>
          <div className="mt-5">
            <a 
              href="mailto:chris.a.desilva@gmail.com"
              className="mr-5 text-white"
            >
              <FaRegEnvelope />
            </a>
            <a 
              href="https://github.com/chrisdesilva/"
              target="_blank"
              className="mr-5 text-white"
            >
              <FaGithub />
            </a>
            <a 
              href="https://twitter.com/ChrisDeSilva27"
              target="_blank"
              className="mr-5 text-white"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.linkedin.com/in/chris-desilva/"
              target="_blank"
              className="mr-5 text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

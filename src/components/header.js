import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    css={{
      background: `#1c3d5a`,
    }}
    className="font-sans mb-5"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <div style={{
      display: `flex`,
      justifyContent: `space-around`,
      alignItems: `center`
    }}>
        <Link
          to="/"
          css={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `1em`,
            marginRight: `2em`,
            transition: `all 300ms ease`,
            ':hover': {
              color: '#51d88a'
            }
          }}
        >
          Home
        </Link>
        <Link
          to="/projects"
          css={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `1em`,
            marginRight: `2em`,
            transition: `all 300ms ease`,
            ':hover': {
              color: '#51d88a'
            }
          }}
        >
          Projects
        </Link>
        <Link
          to="/resume"
          css={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `1em`,
            marginRight: `2em`,
            transition: `all 300ms ease`,
            ':hover': {
              color: '#51d88a'
            }
          }}
        >
          Resume
        </Link>
      </div>
        
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

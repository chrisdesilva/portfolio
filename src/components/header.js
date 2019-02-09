import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3A4257`,
      marginBottom: `1.45rem`,
    }}
    className="font-sans"
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
              color: `red`
            }
          }}
        >
          Home
        </Link>
        <Link
          to="/projects"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: `2em`
          }}  
        >
          Projects
        </Link>
        <Link
          to="/resume"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: `2em`
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

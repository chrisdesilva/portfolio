import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `darkgreen`,
      marginBottom: `1.45rem`,
    }}
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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </h1>
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
        <Link
          to="/contact"
          style={{
            color: `white`,
            textDecoration: `none`
          }}  
        >
          Contact
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

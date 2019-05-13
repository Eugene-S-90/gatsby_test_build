import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import containerStyles from "./test.module.scss"

const Header = ({ siteTitle }) => (
  <header>
    <h1 className={containerStyles.lol} style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `red`,
          textDecoration: `none`,
        }}
      >
        {siteTitle} bla bla 
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

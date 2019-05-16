import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './nav.css'
import Logo from "../gatsby-images/gt-logo"

const Nav = ({ siteTitle }) => (
  <nav className="qt-nav">
    <div className="qt-nav__logo">
    <Logo/>
    </div>
    <ul className="qt-nav__link-list">
    <li className="qt-nav__link"><Link className="qt-nab__link-item"  to="#">About</Link></li>
    <li className="qt-nav__link"><Link className="qt-nab__link-item"  to="#">Features</Link></li>
    <li className="qt-nav__link"><Link className="qt-nab__link-item"  to="#">Contacts</Link></li>
    <li className="qt-nav__link"><Link className="qt-nab__link-item-hire" to="#">Hire us</Link></li>
    </ul>
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav

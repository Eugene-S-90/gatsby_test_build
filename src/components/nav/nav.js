import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './nav.css'
import Logo from "../gatsby-images/gt-logo"

const Nav = ({ siteTitle }) => (
  <nav className="qc-nav">
    <div className="qc-nav__logo">
    <Logo/>
    </div>
    <ul className="qc-nav__link-list">
    <li className="qc-nav__link"><Link className="qc-nab__link-item"  to="#">About</Link></li>
    <li className="qc-nav__link"><Link className="qc-nab__link-item"  to="#">Features</Link></li>
    <li className="qc-nav__link"><Link className="qc-nab__link-item"  to="#">Contacts</Link></li>
    <li className="qc-nav__link"><Link className="qc-nab__link-item-hire" to="#">Hire us</Link></li>
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

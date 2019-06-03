/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// import Nav from "../nav/nav"
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
        <div className="global-container">

          <main className="main">
            {/* <Nav siteTitle={data.site.siteMetadata.title} /> */}
            {children}</main>
          <footer className="qc-footer">
            <div className="qc-footer__wrapper">
              <div className="qc-footer__left">
                <img className="qc-footer__left-logo" src="#" alt="logo" />
                <div className="qc-footer__left-icons">
                  <img className="qc-footer__left-icons-tw" src="#" alt="tw" />
                  <img className="qc-footer__left-icons-tg" src="#" alt="tg" />
                  <img className="qc-footer__left-icons-wtf" src="#" alt="wtf" />
                </div>
              </div>
              <div className="qc-footer__right">
                <div className="qc-footer__right-info"><h5>Contact info</h5>
                  <a href="#">Home</a>
                </div>
                <div className="qc-footer__right-links"><h5>Quick links</h5>
                  <a href="#">Home</a>
                  <a href="#">Features</a>
                  <a href="#">Shedule a demo</a>
                </div>
                <div className="qc-footer__right-legal"><h5>legal</h5>
                  <a href="#">Terms & conditions</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Cookies policy</a>
                </div>
              </div>
            </div>
            <div className="qc-footer__res">© 2019 Quantcloud. All Rights Reserved</div>
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

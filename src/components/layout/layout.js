/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import FooterLogoImg from "../../images/qc-footer-logo.svg"
import FooterTWImg from "../../images/qc-twitter.svg"
import FooterTGImg from "../../images/qc-telegram-footer.svg"
import FooterREImg from "../../images/qc-reddit.svg"

import FooterEmailImg from "../../images/qc-email.svg"
import FooterPhoneImg from "../../images/qc-phone.svg"

// import Nav from "../nav/nav"
import "./layout_and_media_queries.css"


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
                <img className="qc-footer__left-logo" src={FooterLogoImg} alt="logo" />
                <div className="qc-footer__left-icons">
                  <a href="#"><img className="qc-footer__left-icons-tw" src={FooterTWImg} alt="tw" /></a>
                  <a href="#"><img className="qc-footer__left-icons-tg" src={FooterTGImg} alt="tg" /></a>
                  <a href="#"> <img className="qc-footer__left-icons-wtf" src={FooterREImg} alt="wtf" /></a>
                </div>
              </div>
              <div className="qc-footer__right">
                <div className="qc-footer__right-info"><h5 className="qc-footer__right-title">Contact info</h5>
                  <a href="#" className="qc-footer__right-link footer-email"><img src={FooterEmailImg} alt="img"/>info@quantcloud.com</a>
                  <a href="#" className="qc-footer__right-link footer-phone"><img src={FooterPhoneImg} alt="img"/>+38 097 783 88 90</a>
                </div>
                <div className="qc-footer__right-links"><h5 className="qc-footer__right-title">Quick links</h5>
                  <a href="#" className="qc-footer__right-link">Home</a>
                  <a href="#" className="qc-footer__right-link">Features</a>
                  <a href="#" className="qc-footer__right-link">Shedule a demo</a>
                </div>
                <div className="qc-footer__right-legal"><h5 className="qc-footer__right-title">Legal</h5>
                  <a href="#" className="qc-footer__right-link">Terms & conditions</a>
                  <a href="#" className="qc-footer__right-link">Privacy Policy</a>
                  <a href="#" className="qc-footer__right-link">Cookies policy</a>
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

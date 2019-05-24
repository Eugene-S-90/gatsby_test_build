import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import MainScreen from "../components/main-screen/main-screen"
import CardSection from "../components/card-section/card-section"
import HowItWorksSection from "../components/how-it-work-section/how-it-work-section"
import FreedomSection from "../components/fredom-section/freedom-section"
import TradingSection from "../components/trading-section/trading-section"
import CrmSection from "../components/crm-section/crm-section"

import Image from "../components/gatsby-images/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="QuantCloud" keywords={[`gatsby`, `application`, `react`]} />
    <MainScreen />
    <CardSection/>
    <HowItWorksSection/>
    <FreedomSection/>
    <TradingSection/>
    <CrmSection/>
    <Link to="/test/">Go to page 3</Link>
  </Layout>
)

export default IndexPage

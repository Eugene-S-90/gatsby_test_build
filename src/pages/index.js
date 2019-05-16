import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import MainScreen from "../components/main-screen/main-screen"

import Image from "../components/gatsby-images/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="new lp home" keywords={[`gatsby`, `application`, `react`]} />
    <MainScreen />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/test/">Go to page 3</Link>
  </Layout>
)

export default IndexPage

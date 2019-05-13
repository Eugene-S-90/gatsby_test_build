import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import iconImg from "../components/iconImg"

const lol = () => (
  <Layout>
    <SEO title="Page 3" />
    <h1>Hi from the seconsadasd page</h1>
    <p>Welcome to sadaspage sadas2</p>
    <div className="img-wrapper">
    <iconImg />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default lol

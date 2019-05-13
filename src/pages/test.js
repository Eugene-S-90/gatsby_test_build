import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/iconimg"

const test = () => (
  <Layout>
    <SEO title="Page 3" />
    <h1>Hi from the seconsadasd page</h1>
    <p>Welcome to sadaspage sadas2</p>
    <div class="img-wrapper">
    <Image/>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default test

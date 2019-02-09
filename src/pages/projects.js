import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1 className="text-center">Projects</h1>
    <div className="flex flex-col lg:flex-row my-5">
      <div className="flex-1 text-grey-darker text-center bg-grey-light px-4 py-2 m-2">
        thebanistersmusic.com
      </div>
      <div className="flex-1 text-grey-darker text-center bg-grey-light px-4 py-2 m-2">
        mouph.com
      </div>
      <div className="flex-1 text-grey-darker text-center bg-grey-light px-4 py-2 m-2">
        Practice Math
      </div>
    </div>
  </Layout>
)

export default ProjectsPage

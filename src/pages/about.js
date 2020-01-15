import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const content = useStaticQuery(graphql`
    query GetAboutContent {
      markdownRemark(frontmatter: {path: {eq: "/about"}}) {
        html
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About Artist" />

      <section className='biography'>
        <div className='container'>
          <h3>Biography</h3>

          <div className="layout">
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: content.markdownRemark.html }}
              />
              <hr className='ornament' />
            </div>

            <img src='../artist.png' alt='Brian Redmond - Fine Art Painter &amp; Drawer' />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About

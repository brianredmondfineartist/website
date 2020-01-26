import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const content = useStaticQuery(graphql`
    {
      homepage: markdownRemark(frontmatter: {path: {eq: "/"}}) {
        html
      }
      image: markdownRemark(frontmatter: {path: {eq: "/gallery"}, homepage: {eq: true}}) {
        frontmatter {
          title
          image
          medium
          dimensions
          filename {
            publicURL
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <section className='homepage'>
        <div className='layout container'>
          <div className='image'>
            <figure>
              <div className='frame'>
                <img src={content.image.frontmatter.filename.publicURL} alt={content.image.frontmatter.title} />
              </div>

              <figcaption>
                <dl>
                  <dt>{content.image.frontmatter.title}</dt>
                  <dd>{content.image.frontmatter.medium}</dd>
                  <dd>{content.image.frontmatter.dimensions}</dd>
                </dl>
              </figcaption>
            </figure>
          </div>
          
          <div className='intro'>
            <div dangerouslySetInnerHTML={{ __html: content.homepage.html }} />

            <hr className='ornament ornament--small' />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

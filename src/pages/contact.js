import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
  const content = useStaticQuery(graphql`
    {
      contact: markdownRemark(frontmatter: {path: {eq: "/contact"}}) {
        html
      }
      image: markdownRemark(frontmatter: {path: {eq: "/gallery"}, contact: {eq: true}}) {
        frontmatter {
          title
          image
          medium
          dimensions
          filename 
            
        
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Contact" />

      <section className='contact'>
        <h3>Contact</h3>

        <div className='layout container'>
          <div className='intro'
            dangerouslySetInnerHTML={{ __html: content.contact.html }}
          />

          <div className='image'>
            <figure>
              <div className='frame'>
                <img src={content.image.frontmatter.filename} alt={content.image.frontmatter.title} />
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
        </div>
      </section>
    </Layout>
  )
}

export default Contact

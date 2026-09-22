import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const image = data.image
  const gallery = data.gallery.edges.map(item => item.node)
  gallery
    .map(item => item.frontmatter.title = item.frontmatter.title
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '))
  gallery.sort((a, b) => (a.frontmatter.title > b.frontmatter.title) ? 1 : -1)

  const isActiveLink = slug => slug === image.fields.slug ? `class='active'` : ''

  return (
    <Layout>
      <SEO title="Gallery" />

      <section className='layout gallery'>
        <div className='list'>
          <ul dangerouslySetInnerHTML={{
            __html: gallery.map((item, index) => 
              `<li>
                <a href="${item.fields.slug}" key="item-${index}" ${isActiveLink(item.fields.slug)}>${item.frontmatter.title}</a>
              </li>`
            ).join('')
          }} />
        </div>

        <div className='image'>
          <figure>
            <div className='frame'>
              <img src={image.frontmatter.filename.publicURL} alt={image.frontmatter.title} />
            </div>
            <figcaption>
              <dl>
                <dt>{image.frontmatter.title}</dt>
                <dd>{image.frontmatter.medium}</dd>
                <dd>{image.frontmatter.dimensions}</dd>
              </dl>

              {/*
                <div className='controls'>
                  <ul>
                    <li>
                      <a href='#' className='control' id='controleNavPrevious' alt='previous artwork'>
                        <i className="icofont-arrow-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='control' id='controlNavNext' alt='next artwork'>
                        <i className="icofont-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='control' id='controlNavFullscreen'>
                        <i className="icofont-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              */}
            </figcaption>
          </figure>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    image: markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        medium
        title
        dimensions
                 filename 

  
      }
    }
    gallery: allMarkdownRemark(filter: {frontmatter: {path: {eq: "/gallery"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            medium
            title
            dimensions
         filename 
              
            
          }
        }
      }
    }
  }
`

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = () => {
  const content = useStaticQuery(graphql`
    query getGalleryImages {
      allMarkdownRemark(filter: {frontmatter: {path: {eq: "/gallery"}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              medium
              title
              dimensions
              filename {
                publicURL
              }
            }
          }
        }
      }
    }  
  `)

  const gallery = content.allMarkdownRemark.edges.map(item => item.node)
  gallery.sort((a, b) => (a.frontmatter.title > b.frontmatter.title) ? 1 : -1)
  const image = gallery[0]

  const isActiveLink = slug => slug === image.fields.slug ? `class='active'` : ''

  return (
    <Layout>
      <SEO title="Gallery" />

      <section className='layout gallery'>
        <div className='list'>
          <ul dangerouslySetInnerHTML={{__html: gallery.map((item, index) => `<li><a href="${item.fields.slug.slice(0, -1)}#image" key="item-${index}" ${isActiveLink(item.fields.slug)}>${item.frontmatter.title}</a></li>`).join('')}} />
        </div>

        <div className='image'>
          <a name="image"></a>

          <figure>
            <div className='frame'>
              <img src={image.frontmatter.filename.publicURL} alt={image.title} />
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

export default Gallery

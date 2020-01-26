import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const News = () => {
  const content = useStaticQuery(graphql`
    query getNewsItems {
      allMarkdownRemark(filter: {frontmatter: {path: {eq: "/news"}}}) {
        edges {
          node {
            html
            frontmatter {
              title
              date
            }
          }
        }
      }
    }  
  `)

  const news = content.allMarkdownRemark.edges.map(item => item.node)
  news.sort((a, b) => (a.frontmatter.date > b.frontmatter.date) ? 1 : -1)

  const formatDate = date => date.split('T')[0]

  return (
    <Layout>
      <SEO title="News" />

      <section className='news'>
        <div className='container'>
          <h3>News</h3>

          <div className="layout">
            {news.map(item => (
              <>
                <h4>{item.frontmatter.title}</h4>
                <h6>{formatDate(item.frontmatter.date)}</h6>
                <div dangerouslySetInnerHTML={{ __html: item.html }} />
              </>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default News

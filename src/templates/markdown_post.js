import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"


export const pageQuery = graphql`
  query markdown($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default function MarkdownPost({ data }) {

  const html = data.markdownRemark.html
  const title = data.markdownRemark.frontmatter.title
  return (
    <Layout>
        <Seo pageTitle={`Note | ${title}`}/>

        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />

    </Layout>
  )
}
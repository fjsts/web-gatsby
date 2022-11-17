import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"

export default function Home({data}) {
  return (
    <Layout>
      <Hero />
      {data.allPageInfoJson.edges.map(edge =>
        <PostLink key={edge.node.id} post={edge.node} />
      )}
    </Layout>
  )
}

export const query = graphql`
    query allPageInfoJson {
        allPageInfoJson {
            edges {
                node {
                    id
                    title
                    body
                }
            }
        }
    }
`
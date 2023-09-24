import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Seo from "../components/seo"
import TagsGroup from '../components/tags_group';
import NoteCard from "../components/note_card"
import GAd from '../components/googleAdsense';


const Tags = ({data}) => {
    const postsRemark = data.postsRemark.edges

    return (

        <Layout>
            <Seo pageTitle="Note"/>

            <h1>Note</h1>

            <TagsGroup/>

            <GAd/>

            <br/>

            <section>
              <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4 -my-8">
                  {postsRemark.map((edge) => (
                      <NoteCard data={edge.node} key={edge.node.id}/>
                  ))}
                </div>
              </div>
            </section>

        </Layout>

    )
}

export const query = graphql`
  query($tag: String) {
    postsRemark: allMarkdownRemark(
        sort: {frontmatter: {update: DESC}} 
        filter: { frontmatter: { tags: { in: [$tag] } } }
        )
    {
      edges {
        node {
          id
          rawMarkdownBody
          frontmatter {
            title
            tags
            update
          }
        }        
      }
    }
  }

`;


export default Tags

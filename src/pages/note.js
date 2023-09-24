import * as React from 'react';
import Layout from '../components/layout';
import TagsGroup from '../components/tags_group';
import { graphql } from 'gatsby';
import Seo from "../components/seo"
import NoteCard from "../components/note_card"
import GAd from '../components/googleAdsense';


const Note = ({ data }) => {

  const postsRemark = data.postsRemark.edges

  return (
    <Layout>
        <Seo pageTitle="Note"/>

        <h1>Note</h1>

        <TagsGroup/>

        <br/>
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
  );
};



export const query = graphql`
  query {
    postsRemark: allMarkdownRemark
    (sort: {frontmatter: {update: DESC}} )
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

export default Note;
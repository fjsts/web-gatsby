import * as React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Seo from "../components/seo"

const Blog = ({ data }) => {
    const breakpoints = useBreakpoint();
    const edges = data.allMarkdownRemark.edges

  return (
    <Layout>
        <Seo pageTitle="Note"/>

        {breakpoints.mobile ? 
            <div>
                <h1 className="mobile-title">Note</h1>
                <ul>
                {edges.map((edge) => (
                    <li className="blog-list-mobile" key={edge.node.id}>
                        <Link to={edge.node.frontmatter.title}>
                        <div>{edge.node.frontmatter.title}</div>
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
        : null}

        {breakpoints.pc ? 
            <div>
                <h1 className="pc-title">Note</h1>
                <ul >
                {edges.map((edge) => (
                    <li className="blog-list-pc" key={edge.node.id}>
                        <Link to={edge.node.frontmatter.title}>
                        <div>{edge.node.frontmatter.title}</div>
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
        : null}

    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark
    (sort: { frontmatter: { title: ASC } })
    {
      edges {
        node {
          id
          html
          timeToRead
          frontmatter {
            title
            date
            slug
          }
        }
      }
    }
  }
`;

export default Blog;
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";


const TagsGroup = () => {
    const {allMarkdownRemark} = useStaticQuery(query);

    return (
        <div>
            {allMarkdownRemark.group.map(tag => (
              <p className="tag-group-block"> 
                <Link to={`/note/${tag.fieldValue}/`} key={tag.fieldValue}>
                  <span style={{"fontSize": "16px"}}>{tag.fieldValue}</span><span style={{"fontSize": "12px"}}>({tag.totalCount})</span>
                </Link>
              </p>
            ))} 

            <p className="tag-group-block"> 
              <Link to={`/note/`}>
                <span style={{"fontSize": "16px"}}>すべて</span><span style={{"fontSize": "12px"}}>({allMarkdownRemark.totalCount})</span>
              </Link> 
            </p>

        </div >

    )
}

export default TagsGroup

export const query = graphql`
  query {
    allMarkdownRemark{
      totalCount
      group(field: { frontmatter: { tags: SELECT }}) {
        fieldValue
        totalCount
      }
    }
  }
`;


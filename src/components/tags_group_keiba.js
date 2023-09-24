import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";


const TagsGroupKeiba = () => {
    const {allTodayRaceInfoCsv} = useStaticQuery(query);

    return (
        <div>
            {allTodayRaceInfoCsv.group.map(tag => (
              <p className="tag-group-block"> 
                <Link to={`/today_predict/${tag.fieldValue}/`} key={tag.fieldValue}>
                  <span style={{"fontSize": "16px"}}>{tag.fieldValue}</span><span style={{"fontSize": "12px"}}>({tag.totalCount})</span>
                </Link>
              </p>
            ))} 

            <p className="tag-group-block"> 
              <Link to={`/today_predict/`}>
                <span style={{"fontSize": "16px"}}>すべて</span><span style={{"fontSize": "12px"}}>({allTodayRaceInfoCsv.totalCount})</span>
              </Link> 
            </p>

        </div >

    )
}

export default TagsGroupKeiba

export const query = graphql`
  query {
    allTodayRaceInfoCsv {
      totalCount
      group(field: { area: SELECT }) {
        fieldValue
        totalCount
      }
    }
  }
`;


import * as React from "react"
import Layout from "../components/layout"
import RaceList from "../components/race_list"
import { graphql } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Ad from "../components/ad"
import Seo from "../components/seo"


export default function PastPredict({data}) {
  const breakpoints = useBreakpoint();

  function formatDate(dt) {
    dt = new Date(dt)
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth() + 1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);
  }

  const today = formatDate(new Date());
  let count = 0

  function view_link(edge){
    if (today === edge.node.date){
      count = count + 1
      return <RaceList key={edge.node.race_id} post={edge.node} count={count}/>
    }
  }

  return (
    <Layout>
          {breakpoints.mobile ? 
          <div className="mobile-content-center">
            <h1 className="mobile-title">これまでの予想</h1>
          </div> : null}
          {breakpoints.pc ? 
          <div className="pc-content-center">
            <h1 className="pc-title">これまでの予想</h1>
          </div> : null}

        {data.allTodayRaceInfoCsv.edges.map(edge => view_link(edge))}
        <Ad/>

    </Layout>
  )
}


export const query = graphql`
  query race_info {
      allTodayRaceInfoCsv{
        edges {
          node {
            division
            date
            RaceData01_time
            area
            race_id
            race_no
            y_pred_value
          }
        }
      }
    }
`
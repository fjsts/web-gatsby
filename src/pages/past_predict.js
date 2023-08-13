import * as React from "react"
import Layout from "../components/layout"
import RaceList from "../components/race_list"
import { graphql } from "gatsby"
import Ad from "../components/ad"
import Seo from "../components/seo"


export default function Predict({data}) {

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
      <Seo pageTitle="過去の予想"/>
        <h1>過去の予想</h1>
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
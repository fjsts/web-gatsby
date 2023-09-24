import * as React from "react"
import Layout from "../components/layout"
import RaceList from "../components/race_list"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import TagsGroupKeiba from "../components/tags_group_keiba"
import GAd from '../components/googleAdsense';


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
      <Seo pageTitle="本日の予想"/>
      <h1>本日の予想</h1>

      <TagsGroupKeiba/>
      <GAd/>

      {data.allTodayRaceInfoCsv.edges.map(edge => view_link(edge))}

    </Layout>
  )
}


export const query = graphql`
  query ($area: String) {
    allTodayRaceInfoCsv(
        filter: { area: { in: [$area] } }
      )
      {
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
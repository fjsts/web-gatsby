import * as React from "react"
import Layout from "../components/layout"
import RaceList from "../components/race_list"
import { graphql } from "gatsby"

export default function Predict({data}) {

  function formatDate(dt) {
    dt = new Date(dt)
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth() + 1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);
  }

  const today = formatDate(new Date());

  function view_link(edge){
    if (today === edge.node.date){
      return <RaceList key={edge.node.race_id} post={edge.node} />
    }
  }

  return (
    <Layout>
      <h2>本日の予想</h2>


      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="https://px.a8.net/svt/ejp?a8mat=3NN3IQ+BZ1UR6+1JS2+6CP0X" rel="nofollow">
          <img
            border="0"
            width="468"
            height="60"
            alt=""
            src="https://www22.a8.net/svt/bgt?aid=221107346724&amp;wid=001&amp;eno=01&amp;mid=s00000007229001067000&amp;mc=1"
            style={{ margin: 'auto' }}
          />
          <img 
          border="0" 
          width="1" 
          height="1" 
          src="https://www13.a8.net/0.gif?a8mat=3NN3IQ+BZ1UR6+1JS2+6CP0X" alt="" 
          />
        </a>
      </div>

        {data.allTodayRaceInfoCsv.edges.map(edge => view_link(edge))}
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
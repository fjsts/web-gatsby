import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../styles/today_predict_forcus.css"


export default function Home({ data }) {
  return (
    <Layout>
      {/* <SEO title="title" description="description" /> */}
      <h2>本日の狙い目</h2>
      <p className="center_region">中央競馬</p>
      {getRaceData(data.allTodayPredictCsv, 'center')}
      <p className="center_region">地方競馬</p>
      {getRaceData(data.allTodayPredictCsv, 'region')}
    </Layout>
  )
}


function getRaceData(data, division) {
  let ret = [];
  let count = 0;

  function formatDate(dt) {
    dt = new Date(dt)
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth() + 1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);
  }

  const today = formatDate(new Date());


  data.edges.forEach(function (item) {
    if (item.node.y_pred_value > 70) {
      if (item.node.date === today) {
        if (item.node.division === division) {
          count = count + 1
          ret.push(
            <tr key={item.node.id}>
              <td width="20%" >{item.node.area} {item.node.race_no}R</td>
              <td width="20%" >{item.node.RaceData01_time.replace("発走", "")}</td>
              <td width="10%" >{item.node.umaban}</td>
              <td width="50%" >{item.node.horse_name}</td>
            </tr>
          )
        }
      }
    }
  })
  if (count === 0) {
    ret = <p align="center">該当のレースがありません。</p>
  } else {
    ret = (
      <table className="predict">
        <thead>
          <tr>
            <th>レース</th>
            <th>出走</th>
            <th>馬番</th>
            <th>馬名</th>
          </tr>
        </thead>
        <tbody>
          {ret}
        </tbody>
      </table>
    )
  }
  return ret;
}


export const pageQuery = graphql`
  query {
    allTodayPredictCsv{
      edges {
        node {
          id
          division
          RaceData01_time
          date
          area
          race_no
          umaban
          horse_name
          y_pred_value
        }
      }
    }
}
`
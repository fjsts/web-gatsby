import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../styles/home.css"


export default function Home({ data }) {
  return (
    <Layout>
      {/* <SEO title="title" description="description" /> */}
      <h2>本日の狙い目</h2>
      <p className="center_region">中央競馬</p>
      {getRaceData(data.center)}
      <p className="center_region">地方競馬</p>
      {getRaceData(data.region)}
    </Layout>
  )
}


function getRaceData(data) {
  let ret = [];
  let count = 0;


  data.edges.forEach(function (item) {
    if (parseInt(item.node.y_pred_value) > 70) {
      count = count + 1
      ret.push(
        <tr key={item.node.id}>
          <td width="20%" >{item.node.RaceData01_time.replace("発走","")}</td>
          <td width="10%" >{item.node.area}</td>
          <td width="10%" >{item.node.race_no}</td>
          <td width="10%" >[{item.node.umaban}]</td>
          <td width="50%" align="left">{item.node.horse_name}</td>
        </tr>
      )
    }
  })
  if (count === 0) {
    ret = <p align="center">データがありません</p>
  } else {
    ret = (
      <table className="predict">
        <thead>
          <tr>
            <th>出走</th>
            <th>場所</th>
            <th>R</th>
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
    region: allRegionPredictCsv{
      edges {
        node {
          id
          RaceData01_time
          area
          race_no
          umaban
          horse_name
          y_pred_value
        }
      }
    },
    center: allCenterPredictCsv{
      edges {
        node {
          id
          RaceData01_time
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
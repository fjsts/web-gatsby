import React from 'react';
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import GAd from '../components/googleAdsense';


export default function Home({ data }) {

  return (
    <Layout>
      <Seo pageTitle="本日の狙い目"/>

      <h1>本日の狙い目</h1>
      <GAd/>
     
      <br/>

      <h2>中央競馬</h2>
      {getRaceData(data.allTodayPredictCsv, 'center', false)}
      <br/><br/>

      <GAd/>

      <br/><br/>

      <h2>地方競馬</h2>
      {getRaceData(data.allTodayPredictCsv, 'region', false)}

      <br/><br/>
      <GAd/>

    </Layout>

  )
}


function getRaceData(data, division, is_pc) {
  let ret = [];
  let count = 0;
  // let table_class = ""

  function formatDate(dt) {
    dt = new Date(dt)
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth() + 1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);
  }


  // if (is_pc){
  //   table_class = "predict-pc"
  // }else{
  //   table_class = "predict-mobile"
  // }


  data.edges.forEach(function (item) {
    if (item.node.y_pred_value > 70) {
      if (item.node.division === division) {
        count = count + 1
        ret.push(
          <tr key={item.node.id}>
            <td width="20%" >{item.node.area}{item.node.race_no}R</td>
            <td width="20%" >{item.node.RaceData01_time.replace("発走", "")}</td>
            <td width="10%" >{item.node.umaban}</td>
            <td width="50%" >{item.node.horse_name}</td>
          </tr>
        )
      }
    }
  })
  if (count === 0) {
    ret = <p align="center">該当のレースがありません。</p>
  } else {
    ret = (
      <table className="predict-table">
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
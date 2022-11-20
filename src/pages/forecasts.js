import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Forecasts({ data }) {
  return (
    <Layout>
      {render(data.region)}
    </Layout>
  )
}


function render(data) {
  var ret = [];
  var areas = [
    { text: "笠松" },
    { text: "川崎" }
  ]
  var races = [
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { text: "4" },
    { text: "5" },
    { text: "6" },
    { text: "7" },
    { text: "8" },
    { text: "9" },
    { text: "10" },
    { text: "11" },
    { text: "12" },
  ]

  for (var i in areas) {
    for (var j in races) {
      let area = areas[i].text
      let race = races[j].text
      let id = area + race
      ret.push(
        <div key={id} id={id}> {area}{race}R
          {getRaceData(data, area, race)}
        </div>
      );
    }
  }

  return ret

}


function getRaceData(data, area, race_no) {
  let ret = [];
  let count = 0;

  data.edges.forEach(function (item) {
    if (item.node.area === area) {
      if (item.node.race_no === race_no) {
        count = count + 1
        ret.push(
          <tr key={item.node.id}> 
            <td width="20%" >{item.node.RaceData01_time.replace("発走", "")}</td>
            <td width="10%" >{item.node.area}</td>
            <td width="10%" >{item.node.race_no}</td>
            <td width="10%" >[{item.node.umaban}]</td>
            <td width="50%" align="left">{item.node.horse_name}</td>
          </tr>
        )
      }
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
import React from "react"
import "../styles/race_predict.css"
import Layout from "../components/layout";
import { Link } from "gatsby"
import { graphql } from "gatsby"


export default function Post({ pageContext, data}) {
    const area = pageContext.post.area;
    const race_info = pageContext.post.race_no + 'R ' + pageContext.post.RaceData01_time;    
    const race_id = pageContext.post.race_id;

    return (
        <Layout>            

            <h2>{area} {race_info}</h2>

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

            {getRaceData(data.allTodayPredictCsv, race_id)}
            <Link to="/today_predict"><span className="btn-return">← 戻る</span></Link>
        </Layout>
    )
}


function getRaceData(data, race_id) {
    let ret = [];
    let count = 0;
    let pred_value = 0
  
    data.edges.forEach(function (item) {
        if (item.node.race_id === race_id) {
            count = count + 1
            pred_value = Math.round(item.node.y_pred_value * 100) / 100
            ret.push(
            <tr key={item.node.id}> 
                <td width="20%" >{item.node.umaban}</td>
                <td width="60%" align="left">{item.node.horse_name}</td>
                <td width="20%" align="right">{pred_value}</td>
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
              <th>馬番</th>
              <th>馬名</th>
              <th>期待値</th>
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
          race_id
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
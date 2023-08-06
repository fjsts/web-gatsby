import React from "react"
import "../styles/race_predict.css"
import Layout from "../components/layout";
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Ad from "../components/ad";


export default function Post({ pageContext, data}) {
    const breakpoints = useBreakpoint();
    
    const area = pageContext.post.area;
    const race_info = pageContext.post.race_no + 'R ' + pageContext.post.RaceData01_time;    
    const race_id = pageContext.post.race_id;

    return (
        <Layout>            

          {breakpoints.mobile ? 
          <div className='mobile-content-center'> 
            <h1 className="mobile-title">本日の予想</h1>
            <h2 className="mobile-content">{area} {race_info}</h2>
              <Ad/><br/>
            {getRaceData(data.allTodayPredictCsv, race_id, false)}
            <Link to="/today_predict"><span className="mobile-content-center">← 戻る</span></Link>
          <Ad/>
          </div>
            : null}
          
          {breakpoints.pc ? 
          <div className='pc-content-center'> 
            <h1 className="pc-title">本日の予想</h1>
            <h2 className="pc-content">{area} {race_info}</h2>
            <Ad/><br/>

            {getRaceData(data.allTodayPredictCsv, race_id, true)}
            <Link to="/today_predict"><span className="pc-content-center">← 戻る</span></Link>
            <Ad/>
          </div>
            : null}
          
        </Layout>
    )
}



function getRaceData(data, race_id, is_pc) {
    let ret = [];
    let count = 0;
    let pred_value = 0
    let table_class = ""
  
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

    if (is_pc){
      table_class = "predict-pc"
    }else{
      table_class = "predict-mobile"
    }
  
    if (count === 0) {
      ret = <p align="center">データがありません</p>
    } else {
      ret = (
        <table className={table_class}>
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
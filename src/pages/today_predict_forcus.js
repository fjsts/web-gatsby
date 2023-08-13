import React, { useState, useEffect } from 'react';
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Ad from "../components/ad"
import Seo from "../components/seo"


export default function Home({ data }) {

  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const url = "https://widget-view.dmm.co.jp/js/banner_placement.js?affiliate_id=fjs-001&banner_id=927_468_60"

  useEffect(() => {
    if (isFirstLoad) {
      // 初回のロード時の処理をここに記述します
      const script = document.createElement('script');
      script.src = url
      script.async = true;
      document.body.appendChild(script);

      // 初回のロードが完了したので、isFirstLoadをfalseに設定する
      setIsFirstLoad(false);
    }
  }, [isFirstLoad]);


  return (
    <Layout>
      <Seo pageTitle="本日の狙い目"/>

      <h1>本日の狙い目</h1>

      <div>
          <ins className='dmm-ad'></ins>
          <script className="widget-banner-script" src="https://widget-view.dmm.co.jp/js/banner_placement.js?affiliate_id=fjs-001&banner_id=927_468_60" ></script>  
      </div>
      
      <br/>

      <h2>中央競馬</h2>
      {getRaceData(data.allTodayPredictCsv, 'center', false)}
      <br/><br/>

      <h2>地方競馬</h2>
      {getRaceData(data.allTodayPredictCsv, 'region', false)}

      <br/><br/>

      
      <Ad/>



    </Layout>

  )
}







function getRaceData(data, division, is_pc) {
  let ret = [];
  let count = 0;
  let table_class = ""

  function formatDate(dt) {
    dt = new Date(dt)
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth() + 1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);
  }

  const today = formatDate(new Date());

  // if (is_pc){
  //   table_class = "predict-pc"
  // }else{
  //   table_class = "predict-mobile"
  // }


  data.edges.forEach(function (item) {
    if (item.node.y_pred_value > 70) {
      if (item.node.date === today) {
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
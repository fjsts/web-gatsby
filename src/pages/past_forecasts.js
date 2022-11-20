import * as React from "react"
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"

export default function PreviousForecasts({data}) {
  return (
    <Layout>
      {/* <SEO title="データサイエンティストの人工知能（AI）競馬予想" description="過去10年間の走破データを解析し独自のアルゴリズムで作成した完全無料/毎日更新の人工知能（AI）競馬予想です。本サイトでは中央競馬/地方競馬のレース別入賞期待値を掲載しています。日付やレース会場を画面上で選択することで見たい予想をわかりやすく表示できるよう工夫しています。データ収集やモデル作成にはPythonを用いてます。" /> */}
      {data.allPageInfoJson.edges.map(edge =>
        <PostLink key={edge.node.race_id} post={edge.node} />
      )}

    </Layout>
  )
}

export const query = graphql`
    query allPageInfoJson {
        allPageInfoJson {
            edges {
                node {
                    race_id
                    title
                    body
                }
            }
        }
    }
`
import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import "../styles/index.css"


export default function Home({ data }) {
    return (
        <Layout>
            <h2>はじめに</h2>
            <ul>
                <li>
                当サイトは、競馬予想のための完全無料かつ毎日更新される人工知能（AI）を使用しています。弊社独自のアルゴリズムにより、過去の走破データを分析し、約10年分のデータをもとに約300の特徴量を作成しました。これらの特徴量には、馬の調子やレースコンディション、騎手のスキル、馬場の状態など、さまざまな要素が含まれています。これにより、より精度の高い予想が可能になっています。
                </li>


                <li>
                予想には、機械学習の中でも特に高い予測精度を誇るLightGBMを使用しており、複数の予想モデルの総合スコアを利用して、入賞期待値を算出しています。
                </li>

                <li>
                    <span className="page-link"><Link to="/today_predict_forcus">本日の狙い目</Link></span>では、
                    本日の予想の中で特に期待値が高いレースを記載しています。<span className="page-link"><Link to="/today_predict">本日の予想</Link></span>では、
                    本日の予想した全てのレースを一覧形式で記載しています。
                </li>


                <li>
                    競馬予想には、豊富な経験と知識が必要ですが、一般的な競馬ファンがそれらを習得するのは難しいと考えています。そのため、私たちは独自のアルゴリズムを開発し、過去の走破データを分析して、正確な予想を提供することで、競馬ファンの皆様の投資効果を高めることを目指しています。
                </li>

                <li>
                    また、私たちは常に改善を続けており、2022年にはモデルの改良に取り組み、回収率を更に高めることに成功しました。今後もデータの分析や予想モデルの改良に取り組んでいき、競馬ファンの皆様がより正確な予想を受け取れるよう、努めてまいります。
                </li>

                <li>
                    最後に、当サイトは完全無料でご利用いただけますので、是非一度お試しください。皆様の競馬予想に役立てることができれば幸いです。                    
                </li>

            </ul>
        </Layout>
    )
}


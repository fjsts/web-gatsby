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
                    本サイトは、過去の走破データを解析し<span>独自のアルゴリズムで作成した完全無料/毎日更新の人工知能（AI）競馬予想</span>です。
                </li>

                <li>
                    <span className="page-link"><Link to="/today_predict_forcus">本日の狙い目</Link></span>では、
                    本日の予想の中で特に期待値が高いレースを記載しています。
                </li>

                <li>
                    <span className="page-link"><Link to="/today_predict">本日の予想</Link></span>では、
                    本日の予想した全てのレースを一覧形式で記載しています。障害などの一部レースは予想対象外としています。
                </li>

                <li>
                    予想には2010年から約10年間の走破データを使用しています。
                    これまでの経験や論文などを参考に、約300個の特徴量を作成しました。
                </li>

                <li>
                    主なアルゴリズムはLightGBMを使用し、入賞期待値は複数の予想モデルの総合スコアで算出しています。
                    予想モデルの一例を紹介すると、走破タイムを目的変数とした回帰モデル、着順の逆数を目的変数とした回帰モデルなどを
                    利用しています。
                </li>

                <li>
                    モデル改善は2021年以前をTrain/Validation、2022年をTestとし
                    2022年の回収率をKPIとして継続的に行っています。
                </li>
                <li>
                    サイトジェネレーターにはGatsby、解析にはPythonを用いています。
                </li>


            </ul>
        </Layout>
    )
}


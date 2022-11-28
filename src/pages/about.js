import * as React from "react"
import Layout from "../components/layout"


export default function About() {
    return (
        <Layout>
            <main>
                <h2>作者について</h2>
                <ul>
                    <li>
                        昭和生まれの元ITエンジニア兼データサイエンティスト。
                    </li>
                    <li>
                        好きな食べ物はカレーライス。
                    </li>
                    <li>
                        趣味は料理とキャンプ。
                    </li>
                </ul>
            </main>
        </Layout>
    )
}
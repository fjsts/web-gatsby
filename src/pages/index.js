import * as React from "react"
import Layout from "../components/layout"
import ContentHome from "../components/content_home"
import Seo from "../components/seo"


export default function Home() {

    return (
        <Layout>
            <Seo pageTitle="Home"/>
            <h1>本サイトについて</h1>
            <ContentHome />
        </Layout>
    )
}


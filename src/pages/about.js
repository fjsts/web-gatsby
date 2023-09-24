import * as React from "react"
import Layout from "../components/layout"
import ContentAbout from "../components/content_about"
import Seo from "../components/seo"
import GAd from '../components/googleAdsense';


export default function About() {

    return (
        <Layout>
            <Seo pageTitle="作者について"/>

            <GAd/>

            <h1>作者について</h1>
            <ContentAbout/>

            

        </Layout>
    )
}
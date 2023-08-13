import * as React from "react"
import Layout from "../components/layout"
// import { useBreakpoint } from "gatsby-plugin-breakpoints"
import ContentAbout from "../components/content_about"
import Seo from "../components/seo"


export default function About() {
//   const breakpoints = useBreakpoint();

    return (
        <Layout>
            <Seo pageTitle="作者について"/>

            <h1>作者について</h1>
            <ContentAbout/>

        </Layout>
    )
}
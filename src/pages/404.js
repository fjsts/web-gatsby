import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Seo from "../components/seo"

export default function NotFound() {
    // const breakpoints = useBreakpoint();

    return (
        <Layout>
            <Seo pageTitle="404"/>
            <h1>SORRY, PAGE NOT FOUND</h1>
            <Link to="/"><p>🐴トップページへ🐴</p></Link>
        </Layout>
    )
}
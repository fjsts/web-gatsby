import * as React from "react"
import Layout from "../components/layout"
import "../styles/index.css"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import ContentHome from "../components/content_home"
import Ad from "../components/ad"
import Seo from "../components/seo"


export default function Home({ data }) {
    const breakpoints = useBreakpoint();

    return (
        <Layout>
            <Seo pageTitle="Home"/>


            {breakpoints.mobile ? 
            <div className='mobile-content'> 
                <h1 className='mobile-title'>本サイトについて</h1>
                <ContentHome/>
            </div>
            : null}

            {breakpoints.pc ? 
            <div className='pc-content'> 
                <h1 className='pc-title'>本サイトについて</h1>
                <ContentHome />
            </div>
            : null}

            <Ad/>

        </Layout>
    )
}


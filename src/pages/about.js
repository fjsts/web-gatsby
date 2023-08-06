import * as React from "react"
import Layout from "../components/layout"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import ContentAbout from "../components/content_about"
import Seo from "../components/seo"


export default function About() {
  const breakpoints = useBreakpoint();

    return (
        <Layout>
            <Seo pageTitle="作者について"/>

            {breakpoints.mobile ? 
            <div className='mobile-content'> 
                <h1 className='mobile-title'>作者について</h1>
                <ContentAbout/>
            </div>
                : null}
            {breakpoints.pc ? 
            <div className='pc-content'> 
                <h1 className='pc-title'>作者について</h1>
                <ContentAbout />
            </div>
            : null}
        </Layout>
    )
}
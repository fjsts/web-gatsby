import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Seo from "../components/seo"

export default function NotFound() {
    const breakpoints = useBreakpoint();

    return (
        <Layout>
            <Seo pageTitle="404"/>

            {breakpoints.mobile ? 
            <div> 
                <h1 className='mobile-title'>SORRY, PAGE NOT FOUND</h1>
                <Link to="/">
                <p className='mobile-content-center'>🐴トップページへ🐴</p>
                </Link>
            </div>
                : null}
            {breakpoints.pc ? 
            <div> 
                <h1 className='pc-title'>SORRY, PAGE NOT FOUND</h1>
                <Link to="/">
                <p className='pc-content-center'>🐴トップページへ🐴</p>
                </Link>
            </div>
            : null}

        </Layout>
    )
}
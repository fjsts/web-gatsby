import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GAd from '../components/googleAdsense';

export default function NotFound() {

    return (
        <Layout>
            <Seo pageTitle="404"/>
            <GAd/>
            <h1>SORRY, PAGE NOT FOUND</h1>
            <Link to="/"><p>🐴トップページへ🐴</p></Link>
        </Layout>
    )
}
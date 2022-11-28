import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/404.css"

export default function NotFound() {
    return (
        <Layout>
            {/* <img src={LOGO_IMG} className="not-found-image" alt="404sorry"></img> */}
            <p className="not-found-top">SORRY, PAGE NOT FOUND</p>

            <div className="not-found-message">
                <p><Link to="/">🐴トップページへ🐴</Link></p>
            </div>
        </Layout>
    )
}
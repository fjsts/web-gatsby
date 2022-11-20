import React from "react"
import "../styles/post.css"
import Layout from "../components/layout";

export default function Post({ pageContext }) {
    const { title } = pageContext.post;
    const body = pageContext.post.body;

    return (
        <Layout>
            {/* <SEO title={title} description={description} /> */}
            
            <h2>{title} aaaa</h2>
            
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </Layout>
    )
}
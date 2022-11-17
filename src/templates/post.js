import React from "react"
import "../styles/post.css"
import Layout from "../components/layout";

export default function Post({ pageContext }) {
    const { title } = pageContext.post;
    const body = pageContext.post.body;

    return (
        <Layout>
            <div className="post-header">
                <h1>{title}</h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
        </Layout>
    )
}
import React from "react"
import "../styles/post-link.css"
import { Link } from "gatsby"


export default function PostLink({ post }) {
    const { title } = post;
    const pageLink = `/past_forecasts/${post.race_id}/`

    return (
        <Link to={pageLink} className="post-link-anchor">
            <div className="post-link">
                {/* <div>
                <img src={image.file.url} className="post-link-image" alt="post-cover"></img>
            </div> */}
                <div className="post-link-text">
                    <h2>{title}</h2>
                </div>
            </div>
        </Link>
    )
}
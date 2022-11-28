import React from "react"
import "../styles/race_list.css"
import { Link } from "gatsby"


export default function RaceList({ post }) {
    const pageLink = `/today_predict/${post.race_id}/`
    const area = post.area;
    const race_info = post.race_no+ 'R ' + post.RaceData01_time;
    const y_pred_value_max = post.y_pred_value

    let mark = ""

    if(y_pred_value_max > 70){
        mark = "🐴"
    }


    return (
        <Link to={pageLink} className="post-link-anchor">
            <div className="post-link">
                <div className="post-link-text">
                    <h3>{mark} {area} {race_info} {mark} </h3>
                </div>
            </div>
        </Link>
    )
}
import React from "react"
import { Link } from "gatsby"
// import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Ad from '../components/ad';

export default function RaceList({ post , count}) {
    // const breakpoints = useBreakpoint();
    // const count = count

    const pageLink = `/today_predict/${post.race_id}/`
    const area = post.area;
    const race_info = post.race_no+ 'R ' + post.RaceData01_time;
    const y_pred_value_max = post.y_pred_value

    let mark = ""

    if(y_pred_value_max > 70){
        mark = "🐴"
    }


    return (
        <div>
            {count % 5 === 0 ? <Ad/> : null}
            <Link to={pageLink}>
                <div className="today-predict-list">
                    <div>{mark} {area} {race_info} {mark} </div>
                </div>
            </Link>
        </div>
    )
}



import React from "react"
import { Link } from "gatsby"
// import { useBreakpoint } from "gatsby-plugin-breakpoints"
import GAd from '../components/googleAdsense';


export default function RaceList({ post , count}) {

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
            <Link to={pageLink}>
                <div className="today-predict-list">
                    <div>{mark} {area} {race_info} {mark} </div>
                </div>
            </Link>
            {count % 5 === 0 ? <GAd/> : null}
        </div>
    )
}



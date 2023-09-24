import React from "react"
import "../styles/burger.css"
import { slide as Menu} from "react-burger-menu";
import { Link } from "gatsby"

export default function Burger() {

    return (
        <Menu width={250}>
            <p> --- Menu --- </p>
            <Link className="menu-item" to="/">Home</Link>
            <Link className="menu-item" to="/today_predict_forcus">本日の狙い目</Link>
            <Link className="menu-item" to="/today_predict">本日の予想</Link>

            {/* <Link className="menu-item" to="/past_predict">これまでの予想</Link> */}

            <Link className="menu-item" to="/note">Note</Link>
            <Link className="menu-item" to="/about">作者について</Link>
        </Menu>
    )
}


import React from "react"
import "../styles/header.css"
import { slide as Menu} from "react-burger-menu";
import { Link } from "gatsby"


export default function Header() {
    return (
        <header>
            <Menu width={250}>
                <span> --- Menu --- </span>
                <Link className="menu-item" to="/">Home</Link>
                <Link className="menu-item" to="/today_predict_forcus">本日の狙い目</Link>
                <Link className="menu-item" to="/today_predict">本日の予想</Link>
                {/* <Link className="menu-item" to="/past_forecasts">・これまでの予想</Link> */}
                <Link className="menu-item" to="/about">作者について</Link>
            </Menu>

            <p className="header-logo">UmaumaTist</p> 
            <h1>データサイエンティストの人工知能（AI）競馬予想</h1>
            <span className="kakugen">発走前に勝負の５割は決まる</span>
        </header>
    )
}
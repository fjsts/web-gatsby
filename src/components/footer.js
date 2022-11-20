import React from "react"
import "../styles/footer.css"
import LOGO_IMG from "../../static/icon.svg"

export default function Footer() {
    return (
        <footer>
            <img src={LOGO_IMG} className="icon" alt="icon"></img>
            <p className="twitter">
                <a href="https://twitter.com/ai_dark_horses" rel="twitter"
                    target="noreferrer">@ai_dark_horses</a>
            </p>
            <p className="all-right">© {new Date().getFullYear()} All rights reserved.</p>
        </footer>
    )
}
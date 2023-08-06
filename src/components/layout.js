import React from "react"
import "../styles/layout.css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
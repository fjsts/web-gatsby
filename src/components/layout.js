import React from "react"
import "../styles/layout.css"
import Header from "./header"
import Footer from "./footer"
import Seo from '../components/seo';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Seo/>
            <main className="main">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
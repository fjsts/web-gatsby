import React from "react"
import Header from "./header"
import Footer from "./footer"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Layout = ({ children }) => {
    const breakpoints = useBreakpoint();

    return (
        <div>
            <Header />

            {breakpoints.mobile ? 
            <main className="mobile-main">{children}</main> : null}
            {breakpoints.pc ? 
            <main className="pc-main">{children}</main>: null}

            <Footer />
        </div>
    )
}

export default Layout
import React from "react"
import Header from "./header"
import Footer from "./footer"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Seo from "../components/seo"
import Burger from "../components/burger"


const Layout = ({ children }) => {
    const breakpoints = useBreakpoint();

    return (
        <div>
            <Burger/>
            <Header />
            {/* <GAd/> */}
            <Seo/> {/* TwitterのCardのために必要 */}

            {breakpoints.mobile ? 
            <main className="mobile-main">{children}</main> : null}
            {breakpoints.pc ? 
            <main className="pc-main">{children}</main>: null}

            <Footer />
        </div>
    )
}

export default Layout
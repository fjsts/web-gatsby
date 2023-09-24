import React from "react"
import "../styles/style.css"
import { graphql, useStaticQuery} from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

export default function Header() {
    const { site } = useStaticQuery(query);
    const breakpoints = useBreakpoint();

    return (
        <header>
            {breakpoints.mobile ? 
            <div>
              <p className="header-logo-mobile">{site.siteMetadata.siteSubTitle}</p> 
              <p className="header-title-mobile">{site.siteMetadata.siteName}</p>
              <span className="kakugen-mobile">発走前に勝負の５割は決まる</span>
            </div>
                : null}
            {breakpoints.pc ? 
            <div>
              <p className="header-logo-pc">{site.siteMetadata.siteSubTitle}</p> 
              <p className="header-title-pc">{site.siteMetadata.siteName}</p>
              <span className="kakugen-pc">発走前に勝負の５割は決まる</span>
            </div>
            : null}
        </header>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        siteSubTitle
        siteDescription
        siteUrl
        siteOgpImage
        siteAuthor
      }
    }
  }
`
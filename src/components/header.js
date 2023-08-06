import React from "react"
import "../styles/header.css"
import { slide as Menu} from "react-burger-menu";
import { Link , graphql, useStaticQuery} from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

export default function Header({data}) {
    const { site } = useStaticQuery(query);
    const breakpoints = useBreakpoint();

    return (
        <header>
            <Menu width={250}>
                <span> --- Menu --- </span>
                <Link className="menu-item" to="/">Home</Link>
                <Link className="menu-item" to="/today_predict_forcus">本日の狙い目</Link>
                <Link className="menu-item" to="/today_predict">本日の予想</Link>

                {/* <Link className="menu-item" to="/past_predict">これまでの予想</Link> */}

                <Link className="menu-item" to="/note">Note</Link>
                <Link className="menu-item" to="/about">作者について</Link>
            </Menu>

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
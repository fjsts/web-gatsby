import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";


const SEO = ({ pageTitle, pageDescription, imgPath, topPage }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const {
        siteName,
        siteSubTitle,
        siteDescription,
        siteUrl,
        siteImage,
        siteOgpImage,
        siteAuthor,
    } = site.siteMetadata;

    const seo = {
        // title: pageTitle ? `${pageTitle} | ${siteName}` : `${siteName} | ${siteSubTitle}`,
        title: pageTitle ? `${pageTitle} | ${siteSubTitle}` : `${siteName} | ${siteSubTitle}`,
        description: pageDescription || siteDescription,
        image: `${siteUrl}${imgPath || siteImage}`,
        ogpImage: `${siteUrl}${imgPath || siteOgpImage}`,
        url: `${siteUrl}${pathname}`,
        pageType: topPage ? "website" : "article",
      };

    return (
      <Helmet>
        <html lang="ja-JP" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <meta name="robots" content="all"/>
        <title>{seo.title}</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteAuthor} />
        <meta name="twitter:image" content={seo.ogpImage} />

        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="author" content={siteAuthor} />
        <meta property="og:locale" content="ja-JP" />
        {<meta property="og:site_name" content={siteName} />}
        {seo.url && <meta property="og:url" content={seo.url} />}
        {seo.pageType && <meta property="og:type" content={seo.pageType} />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && <meta property="og:description" content={seo.description} />}
        {seo.image && <meta property="og:image" content={seo.image} />}
      </Helmet>
    )
}

export default SEO

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



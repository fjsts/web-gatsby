/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {


  siteMetadata: {
    siteName: "データサイエンティストの人工知能（AI）競馬予想",
    siteSubTitle: "UmaumaTist",
    siteDescription: "過去10年間の走破データを解析し独自のアルゴリズムで作成した完全無料/毎日更新の人工知能（AI）競馬予想です。主なアルゴリズムはLightGBMを使用し入賞期待値は複数の予想モデルの総合スコアで算出しています。 サイトジェネレーターにはGatsby、解析にはPythonを用いています。",
    siteUrl: "https://fjs-fire.com",
    siteImage: `/icon.svg`,
    siteOgpImage: `/icon.png`,
    siteAuthor: "@ai_dark_horses",

  },

  // pathPrefix: "/web-gatsby", ドメインなしの場合必要

  plugins: [
    "gatsby-transformer-json",
    "gatsby-transformer-csv",
    `gatsby-plugin-robots-txt`,

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`, //サイトマップをルートディレクトリ直下に出力するようなオプション
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "データサイエンティストの人工知能（AI）競馬予想",
        short_name: "UmaumaTist",
        start_url: `/`,
        display: `minimal-ui`, //↓詳細は下。
        icon: `${__dirname}/static/icon.svg`,
        background_color: "#101010",
        theme_color: "#ffffffba",

      }
    },
    `gatsby-plugin-offline`,


    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-09YQ0TXZFD"],  // 控えておいた、測定IDを記載します。
        pluginConfig: {
          head: true  // headタグに記載されるようにコンフィグを設定します。
        }
      }
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://fjs-fire.com`,
      },
    },

  ],
}

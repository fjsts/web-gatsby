/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */


const breakPoints = {
  mobile: "(max-width: 1023px)",
  pc: "(min-width: 1024px)",
}

module.exports = {


  siteMetadata: {
    siteName: `データサイエンティストの人工知能(AI)競馬予想`,
    siteSubTitle: "U M U M T",
    siteDescription: "過去10年間の走破データを解析し独自のアルゴリズムで作成した完全無料/毎日更新の人工知能（AI）競馬予想です。主なアルゴリズムはLightGBMを使用し入賞期待値は複数の予想モデルの総合スコアで算出しています。 サイトジェネレーターにはGatsby、解析にはPythonを用いています。",
    siteUrl: "https://fjs-fire.com",
    siteImage: `/icon.svg`,
    siteOgpImage: `/icon.png`,
    siteAuthor: "@ai_dark_horses",

  },

  // pathPrefix: "/web-gatsby", ドメインなしの場合必要

  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options:{
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            }
          }
        ]
      }
    },


    {
      resolve: `gatsby-transformer-csv`,
      options: {
        noheader: false,
      },
    },

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`, //サイトマップをルートディレクトリ直下に出力するようなオプション
        excludes: [`/today_predict/*`]
      },
    },


    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://fjs-fire.com/',
        sitemap: 'https://fjs-fire.com/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
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

    // レスポンシブデザイン 
    { 
      resolve: 'gatsby-plugin-breakpoints',
      options: {
      queries: breakPoints,
      },
    },

    // // iframe
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [`gatsby-remark-responsive-iframe`],
    //   },
    // },

  ],
}

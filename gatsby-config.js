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
    title: "データサイエンティストの人工知能（AI）競馬予想",
    // description: "過去10年間の走破データを解析し独自のアルゴリズムで作成した完全無料/毎日更新の人工知能（AI）競馬予想です。本サイトでは中央競馬/地方競馬のレース別入賞期待値を掲載しています。日付やレース会場を画面上で選択することで見たい予想をわかりやすく表示できるよう工夫しています。データ収集やモデル作成にはPythonを用いてます。",
    // author: {
    //   name: `書いてる人の名前`,
    //   summary: `どんな人？`,
    // },
    siteUrl: `https://fjsts.github.io/web-gatsby/`,
    icon: `${__dirname}/static/icon.svg`

  },
  pathPrefix: "/web-gatsby",
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

    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Ai Dark Horse`,
    //     start_url: `/`,
    //     display: `minimal-ui`, //↓詳細は下。
    //     icon: `${__dirname}/static/icon.svg`,
    //     icon_options: {
    //       purpose: `any maskable`,
    //     },
    //     icons: [ //↓詳細は下
    //       {
    //         src: `${__dirname}/static/icon.svg`,
    //         type: `image/svg+xml`,
    //       }
    //     ]
    //   }
    // },
    // `gatsby-plugin-offline` //これ。gatsby-plugin-manifestのあとに書く。

  ],
}

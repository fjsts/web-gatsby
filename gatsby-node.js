const path = require("path")



// キャッシュ対応 https://zenn.dev/euro/articles/696ee8845ce9f5
exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Query: {
      contextChangeNotInvalidingQueryWorkaround: {
        type: `JSON`, // type actually doesn't matter - we will return/resolve `null` anyway
        args: {
          path: {
            type: `String!`,
          },
        },
        resolve: async (_source, args, context) => {
          // Lookup SitePage node for current page.
          // This will register SitePage node as dependency of the query.
          // Changing context does change SitePage, so it will invalidate
          // query result properly.
          await context.nodeModel.runQuery({
            query: {
              filter: {
                path: { eq: args.path },
              },
            },
            type: `SitePage`,
            firstOnly: true,
          })

          return null
        },
      },
    },
  })
}


exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    let query

    function formatDate(dt) {
        dt = new Date(dt)
        var y = dt.getFullYear();
        var m = ('00' + (dt.getMonth() + 1)).slice(-2);
        var d = ('00' + dt.getDate()).slice(-2);
        return (y + '-' + m + '-' + d);
    }


    const today = formatDate(new Date());

    query = await graphql(
        `
        {
            result: allTodayRaceInfoCsv {
                edges {
                    node {
                        date
                        RaceData01_time
                        area
                        race_id
                        race_no
                    }
                }
            }
            tagsGroup: allTodayRaceInfoCsv(
              limit: 2000
            ) {
              group(field: { area: SELECT }) {
                fieldValue
              }
            }
        }
        `
    )


    if (query.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    query.data.result.edges.forEach(edge => {
        if (today === edge.node.date){
            createPage({
                path: `/today_predict/${edge.node.race_id}/`,
                component: path.resolve("./src/templates/post_race_predict.js"),
                context: { post: edge.node }
            })
        }
    });

    query.data.tagsGroup.group.forEach(group => {
      createPage({
        path: `/today_predict/${group.fieldValue}/`,
        component: path.resolve("src/templates/select_today_predict.js"),
        context: {
          area: group.fieldValue,
        },
      })
    })



  // markdown
  query = await graphql(`
  {
    result: allMarkdownRemark(
      sort: {frontmatter: {update: ASC}}
      limit: 2000
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            update
            created
            tags
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark(
      limit: 2000
    ) {
      group(field: { frontmatter: { tags: SELECT }}) {
        fieldValue
      }
    }
  }
  `)

  // handle errors
  if (query.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = query.data.result.edges
  // Create post detail pages
  posts.forEach((post) => {
    createPage({
      path: `/note/${post.node.frontmatter.title}`,
      component: path.resolve("src/templates/post_markdown.js"),
      context: {
        id: post.node.id
      }
    })
  })

  // Extract tag data from query
  const tags = query.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/note/${tag.fieldValue}/`,
      component: path.resolve("src/templates/select_note.js"),
      context: {
        tag: tag.fieldValue,
      },
    })
  })




  // 過去分
  const past_result = await graphql(
    `
    {
        allPastRaceInfoCsv {
            edges {
                node {
                    date
                    RaceData01_time
                    area
                    race_id
                    race_no
                }
            }
        }

    }
    `
  )

  past_result.data.allPastRaceInfoCsv.edges.forEach(edge => {
    if (today > edge.node.date){
        createPage({
            path: `/past_predict/${edge.node.race_id}/`,
            component: path.resolve("./src/templates/post_past_race_predict.js"),
            context: { post: edge.node }
        })
    }
  });






}
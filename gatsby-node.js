const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    function formatDate(dt) {
        dt = new Date(dt)
        var y = dt.getFullYear();
        var m = ('00' + (dt.getMonth() + 1)).slice(-2);
        var d = ('00' + dt.getDate()).slice(-2);
        return (y + '-' + m + '-' + d);
    }


    const today = formatDate(new Date());
    const result = await graphql(
        `
        {
            allTodayRaceInfoCsv {
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


    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allTodayRaceInfoCsv.edges.forEach(edge => {
        if (today === edge.node.date){
            createPage({
                path: `/today_predict/${edge.node.race_id}/`,
                component: path.resolve("./src/templates/race_predict.js"),
                context: { post: edge.node }
            })
        }
    });

    past_result.data.allPastRaceInfoCsv.edges.forEach(edge => {
      if (today > edge.node.date){
          createPage({
              path: `/past_predict/${edge.node.race_id}/`,
              component: path.resolve("./src/templates/past_race_predict.js"),
              context: { post: edge.node }
          })
      }
  });



  // markdown
  const MarkdownPostTemplate = path.resolve("src/templates/markdown_post.js")
  const tagTemplate = path.resolve("src/templates/tags.js")
  const md_result = await graphql(`
  {
    postsRemark: allMarkdownRemark(
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
  if (md_result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = md_result.data.postsRemark.edges
  // Create post detail pages
  posts.forEach((post) => {
    createPage({
      path: `/note/${post.node.frontmatter.title}`,
      component: MarkdownPostTemplate,
      context: {
        id: post.node.id
      }
    })
  })

  // Extract tag data from query
  const tags = md_result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/note/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })


}
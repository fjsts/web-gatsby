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

    // markdown
    const result1 = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              html
              frontmatter {
                slug
                title
                date
              }
            }
          }
        }
      }
  `);

  const posts = result1.data.allMarkdownRemark.edges;

  posts.forEach((post) => {
    createPage({
      path: `/note/${post.node.frontmatter.title}`,
      component: path.resolve(`./src/templates/markdown_post.js`),
      context: {
        id: post.node.id
      },
    });
  });

}
const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
        {
            allPageInfoJson {
                edges {
                    node {
                        race_id
                        title
                        body
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

    const { edges } = result.data.allPageInfoJson

    edges.forEach(edge => {
        createPage({
            path: `/past_forecasts/${edge.node.race_id}/`,
            component: path.resolve("./src/templates/post.js"),
            context: { post: edge.node }
        })
    });
}
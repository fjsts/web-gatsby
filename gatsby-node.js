const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
        {
            allPageInfoJson {
                edges {
                    node {
                        id
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
            path: `/post/${edge.node.id}/`,
            component: path.resolve("./src/templates/post.js"),
            context: { post: edge.node }
        })
    });
}
exports.createPages = async function ({ actions, graphql }) {
  const data = require('./src/somethings/sectors.js');

  data.forEach(edge => {
    const { name } = edge;
    actions.createPage({
      path: `/sectors/${name}`,
      component: require.resolve(`./src/templates/sectors.js`),
      context: { slug: `/sectors/${name}`, name },
    })
  })

  actions.createPage({
    path: `/sectors`,
    component: require.resolve(`./src/templates/sectors-list.js`),
    context: { sectors: data },
  })

}


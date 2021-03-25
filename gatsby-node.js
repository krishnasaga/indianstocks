exports.createPages = async function ({ actions, graphql }) {
  const data = require('./src/somethings/sectors.js');

  data.forEach(edge => {
    const { name,displayName,intro,insights,backgroundImage } = edge;
    actions.createPage({
      path: `/sectors/${name}`,
      component: require.resolve(`./src/templates/sectors.js`),
      context: { slug: `/sectors/${name}`,
        name,
        displayName,
        intro,insights: insights || [],
        backgroundImage },
    })
  })

  actions.createPage({
    path: `/sectors`,
    component: require.resolve(`./src/templates/sectors-list.js`),
    context: { sectors: data },
  })

}


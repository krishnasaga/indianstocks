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
    });

    actions.createPage({
      path: `/sectors/${name}/complete-analysis-of-${name}-sector-in-india`,
      component: require.resolve(`./src/templates/sector-analysis.js`),
      context: { slug: `/sectors/${name}/complete-analysis-of-${name}-sector-in-india`,
        name,
        displayName,
        intro,insights: insights || [],
        backgroundImage },
    })

    actions.createPage({
      path: `/sectors/${name}/all-companies-in-${name}-sector-india`,
      component: require.resolve(`./src/templates/sectors.js`),
      context: { slug: `/sectors/${name}/all-companies-in-${name}-sector-india`,
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


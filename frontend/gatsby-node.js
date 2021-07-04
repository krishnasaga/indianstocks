const axios = require("axios");
const {getSectors, getCompanies,getIdeas} = require('./companies');

exports.createPages = async function ({actions, graphql}) {
  let data = null;

  if (!process.env.API) {
    data = require("./src/somethings/sectors.js");
  } else {
    const sectorsResponse = await getSectors();
    data = sectorsResponse.data;
  }

  await Promise.all(data.map(async (edge) => {
    const {id, name, displayName, intro, insights, backgroundImage} = edge;
    const {data} = await getCompanies();
    const companies = data;
    const pages = [
      {
        path: `/sectors/${name}`,
        component: require.resolve(`./src/templates/sectors-companies.js`),
        context: {slug: `/sectors/${name}`},
      },
      {
        path: `/sectors/${name}/stats`,
        component: require.resolve(`./src/templates/sectors-stats.js`),
        context: {
          slug: `/sectors/${name}/stats`,
        },
      },
      {
        path: `/ideas/${name}`,
        component: require.resolve(`./src/templates/sectors-companies.js`),
        context: {slug: `/sectors/${name}`},
      },
      {
        path: `/ideas/${name}/stats`,
        component: require.resolve(`./src/templates/sectors-stats.js`),
        context: {
          slug: `/sectors/${name}/stats`,
        },
      },
    ];

    pages.map((params) => {


      actions.createPage({
        ...params,
        context: {
          ...params.context,
          name,
          displayName,
          intro,
          insights,
          backgroundImage,
          companies: companies || []
        },
      });
    });

    pages
      .filter((page) => page.comingSoon)
      .forEach((params) => {
        actions.createRedirect({
          fromPath: params.path,
          toPath: "/coming-soon",
          force: true,
          redirectInBrowser: true,
        });
      });

  }));

  const sectors = await getSectors();

  actions.createPage({
    path: '/sectors',
    component: require.resolve(`./src/templates/sectors.js`),
    context: {
      sectors: sectors.data
    }
  });



  const ideas = await getIdeas();
  const neftySectorIndexes = await getIdeas({type: 'nefty_sector_index'});


  actions.createPage({
    path: '/ideas',
    component: require.resolve(`./src/templates/ideas.js`),
    context: {
      ideas: ideas.data
    }
  });

  actions.createPage({
    path: '/',
    component: require.resolve(`./src/templates/index.js`),
    context: {
      ideas: ideas.data,
      sectors: sectors.data,
      neftySectorIndexes: neftySectorIndexes.data
    }
  });


}

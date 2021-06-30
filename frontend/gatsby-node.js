const axios = require("axios");
const {getSectors, getCompanies} = require('./companies');

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
        component: require.resolve(`./src/templates/sectors.js`),
        context: {slug: `/sectors/${name}`},
      },
      {
        path: `/sectors/${name}/complete-analysis-of-${name}-sector-in-india`,
        component: require.resolve(`./src/templates/sector-analysis.js`),
        context: {
          slug: `/sectors/${name}/complete-analysis-of-${name}-sector-in-india`,
        },
        comingSoon: true,
      },
      {
        path: `/sectors/${name}/all-companies-in-${name}-sector-india`,
        component: require.resolve(`./src/templates/sectors.js`),
        context: {
          slug: `/sectors/${name}/all-companies-in-${name}-sector-india`,
        },
      },
      {
        path: `/sectors/${name}/all-publicly-listed-companies-in-${name}-sector-india`,
        component: require.resolve(`./src/templates/sectors.js`),
        context: {
          slug: `/sectors/${name}/all-companies-in-${name}-sector-india`,
        },
      },
      {
        path: `/sectors/${name}/all-private-limited-companies-in-${name}-sector-india`,
        component: require.resolve(`./src/templates/sectors.js`),
        context: {
          slug: `/sectors/${name}/all-companies-in-${name}-sector-india`,
        },
      },
      {
        path: `/sectors/${name}/latest-news-about-companies-in-${name}-sector-india`,
        component: require.resolve(`./src/templates/sectors.js`),
        context: {
          slug: `/sectors/${name}/latest-news-about-companies-in-${name}-sector-india`,
        },
        comingSoon: true,
      },
      {
        path: `/sectors/${name}/q-and-a-of-${name}-sector-india`,
        component: require.resolve(`./src/templates/sectors.js`),
        context: {
          slug: `/sectors/${name}/latest-news-about-companies-in-${name}-sector-india`,
        },
        comingSoon: true,
      },

      {
        path: `/sectors/${name}/stats`,
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
    path: '/',
    component: require.resolve(`./src/templates/index.js`),
    context: {
      sectors: sectors.data
    }
  });

  actions.createPage({
    path: '/ideas',
    component: require.resolve(`./src/templates/ideas.js`),
    context: {
      sectors: sectors.data
    }
  });

}

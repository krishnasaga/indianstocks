const axios = require("axios");

let API_ENDPOINT = null;

if (process.env.NODE_ENV === "production") {
  API_ENDPOINT = "https://979lav1fck.execute-api.us-east-1.amazonaws.com/production";
} else {
  API_ENDPOINT = "http://localhost:3030";
}

exports.createPages = async function ({ actions, graphql }) {
  let data = null;

  if (!process.env.API) {
    data = require("./src/somethings/sectors.js");
  } else {
    const sectorResponse = await axios.get(`${API_ENDPOINT}/sectors`);
    data = sectorResponse.data.data;
  }

  data.forEach(async (edge) => {
    const { name, displayName, intro, insights, backgroundImage,companies } = edge;

    const pages = [
      {
        path: `/sectors/${name}`,
        component: require.resolve(`./src/templates/sectors.js`),
        context: { slug: `/sectors/${name}` },
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
    ];

    pages.map(  (params) => {


      actions.createPage({
        ...params,
        context: {
          ...params.context,
          name,
          displayName,
          intro,
          insights,
          backgroundImage,
          companies: companyResponse.data.data
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
  })
};

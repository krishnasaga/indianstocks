const axios = require('axios');

let API_ENDPOINT = null;

if(process.env.NODE_ENV === 'production') {
  API_ENDPOINT = 'https://qx4w2t87f2.execute-api.us-east-1.amazonaws.com';
}else {
  API_ENDPOINT = 'http://localhost:3030';
}

exports.createPages = async function ({actions, graphql}) {

  let data = null;

  console.log('API env variable is on',process.env.API);

  if (!process.env.API) {
    data = require('./src/somethings/sectors.js');
  } else {
    const response = await axios.get(`${API_ENDPOINT}/sectors`);
    data = response.data.data;
  }

  data.forEach(edge => {
    const {name, displayName, intro, insights, backgroundImage} = edge;

    const pages = [
      {
        path: `/sectors/${name}`,
        component: require.resolve(`./src/templates/sectors.js`),
        context: {slug: `/sectors/${name}`}
      },
      {
        path: `/sectors/${name}/complete-analysis-of-${name}-sector-in-india`,
        component: require.resolve(`./src/templates/sector-analysis.js`),
        context: {slug: `/sectors/${name}/complete-analysis-of-${name}-sector-in-india`}
      },
      {
        path: `/sectors/${name}/all-companies-in-${name}-sector-india`,
        component: require.resolve(`./src/templates/sectors.js`),
        context: {slug: `/sectors/${name}/all-companies-in-${name}-sector-india`}
      },
      {
        path: `/sectors/${name}/all-publicly-listed-companies-in-${name}-sector-india`,
        component: require.resolve(`./src/templates/sectors.js`),
        context: {slug: `/sectors/${name}/all-companies-in-${name}-sector-india`}
      },
      {
        path: `/sectors/${name}/all-private-limited-companies-in-${name}-sector-india`,
        component: require.resolve(`./src/templates/sectors.js`),
        context: {slug: `/sectors/${name}/all-companies-in-${name}-sector-india`}
      },
      {
        path: `/sectors/${name}/latest-news-about-companies-in-${name}-sector-india`,
        component: require.resolve(`./src/templates/sectors.js`),
        context: {slug: `/sectors/${name}/latest-news-about-companies-in-${name}-sector-india`}
      },
      {
        path: `/sectors/${name}/latest-news-about-companies-in-${name}-sector-india`,
        component: require.resolve(`./src/templates/sectors.js`),
        context: {slug: `/sectors/${name}/latest-news-about-companies-in-${name}-sector-india`}
      }
    ];

    pages.forEach((params) => {
      actions.createPage({
        ...params,
        context: {
          ...params.context,
          name,
          displayName,
          intro,
          insights,
          backgroundImage
        }
      })
    });

  })

  actions.createPage({
    path: `/sectors`,
    component: require.resolve(`./src/templates/sectors-list.js`),
    context: {sectors: data},
  })

}


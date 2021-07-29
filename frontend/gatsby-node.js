const axios = require("axios");
const {getSectors, getCompanies, getIdeas, getIpos} = require('./companies');


exports.createPages = async function ({actions, graphql}) {


  const sectors = await getSectors();

  actions.createPage({
    path: '/sectors',
    component: require.resolve(`./src/templates/sectors.js`),
    context: {
      sectors: sectors.data
    }
  });


  await Promise.all(sectors.data.map(async (edge) => {
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
    ];

    pages.map((params) => {


      actions.createPage({
        ...params,
        context: {
          ...params.context,
          name,
          displayName,
          intro: '',
          insights: [],
          backgroundImage: '',
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

  const ideas = await getIdeas();

  await Promise.all(ideas.data.map(async (edge) => {
    const {id, name, displayName, intro, insights, backgroundImage} = edge;
    const data = await getIdeas({id});
    const companies = data.companies;

    const pages = [
      {
        path: `/ideas/${name.toLowerCase().replace(/ /g, '-')}`,
        component: require.resolve(`./src/templates/sectors-companies.js`),
        context: {slug: `/ideas/${name.toLowerCase().replace(/ /g, '-')}`, companies},

      },
      {
        path: `/ideas/${name.toLowerCase().replace(/ /g, '-')}/stats`,
        component: require.resolve(`./src/templates/sectors-stats.js`),
        context: {
          slug: `/ideas/${name.toLowerCase().replace(/ /g, '-')}/stats`,
          companies
        },
      },
    ];

    pages.map((params) => {


      actions.createPage({
        ...params,
        context: {
          ...params.context,
          name,
          displayName: '',
          intro: '',
          insights: [],
          backgroundImage: '',
          companies: companies || []
        },
      });
    });


  }));


  const neftySectorIndexes = await getIdeas({type: 'nefty_sector_index'});


  actions.createPage({
    path: '/ideas',
    component: require.resolve(`./src/templates/ideas.js`),
    context: {
      ideas: ideas.data
    }
  });

  const IPOs = await getIpos();


  actions.createPage({
    path: '/ipos',
    component: require.resolve(`./src/templates/ipos-list.js`),
    context: {
      ipos: IPOs.data.map((data) => {
        return {image: {url: `https://source.unsplash.com/290x145/?${data.name.replace(/ /g, ',')}`}, ...data}
      })
    }
  });

  await Promise.all(IPOs.data.map(async (edge) => {
    const {id, name, displayName, intro, insights, backgroundImage, ...remainingProps} = edge;

    const pages = [
      {
        path: `/ipos/${name.trim().toLowerCase().replace(/ /g, '-')}`,
        component: require.resolve(`./src/templates/ipo.js`),
        context: {
          slug: `/ideas/${name.trim().toLowerCase().replace(/ /g, '-')}`,
          ipo: remainingProps,
          companies: []
        },

      }
    ];

    pages.map((params) => {


      actions.createPage({
        ...params,
        context: {
          ...params.context,
          name,
          displayName: '',
          intro: '',
          insights: [],
          backgroundImage: '',
          companies: []
        },
      });
    });


  }));

  actions.createPage({
    path: '/',
    component: require.resolve(`./src/templates/index.js`),
    context: {
      IPOs: IPOs.data,
      ideas: ideas.data,
      sectors: sectors.data,
      neftySectorIndexes: neftySectorIndexes.data
    }
  });

  const footerLinks = [
    "/open-source",
    "/discord",
    "/twitter",
    "/company",
    "/careers",
    "/partners",
    "/blog",
    "/press",
    "/contact-us",
    "/data-analytics",
    "/research",
    "/data-platforms",
    "/open-source",
    "/create-a-profile",
    "/features-lists-and-searches",
    "/biginvest-difference",
    "/knowledge",
    "/privacy"
  ].forEach((path)=>{
    actions.createPage({
      path: path,
      component: require.resolve(`./src/templates/coming-soon.js`),
      context: {

      }
    });
  });


}

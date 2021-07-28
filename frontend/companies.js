const cache = require('file-system-cache').default;
const axios = require("axios");
require('axios-debug-log');

let API_ENDPOINT = null;

if (process.env.NODE_ENV === "production") {
  //API_ENDPOINT = "https://979lav1fck.execute-api.us-east-1.amazonaws.com/production";
  API_ENDPOINT = "http://localhost:3030";

} else {
  API_ENDPOINT = "http://localhost:3030";
}

const sectorsCacheInFileSystem = cache({
  basePath: "./.apicache", // Optional. Path where cache files are stored (default).
  ns: "sectors" // Optional. A grouping namespace for items.
});

const companiesCacheInFileSystem = cache({
  basePath: "./.apicache", // Optional. Path where cache files are stored (default).
  ns: "companies" // Optional. A grouping namespace for items.
});

const ideasCacheInFileSystem = cache({
  basePath: "./.apicache", // Optional. Path where cache files are stored (default).
  ns: "ideas" // Optional. A grouping namespace for items.
});

const getSectors = async ({id = 'all'} = {}) => {
  const sectorsResponse = await sectorsCacheInFileSystem.get(id);

  if (sectorsResponse) {
    return sectorsResponse;
  }

  const response = await axios.get(`${API_ENDPOINT}/ideas?type=sector`);
  sectorsCacheInFileSystem.set(id, response.data);
  return response.data;

};

const getCompanies = async ({id = 'all',categoryId} = {}) => {
  const companiesResponse = await companiesCacheInFileSystem.get(id);

  if (companiesResponse) {
    return companiesResponse;
  }
  const response = await axios.get(`${API_ENDPOINT}/company?$limit=100`,{});
  companiesCacheInFileSystem.set(id, response.data);
  return response.data;

};


const getIpos = async ({id = 'all'} = {}) => {
  const companiesResponse = await companiesCacheInFileSystem.get(id+'192');

  if (companiesResponse) {
    return companiesResponse;
  }
  const response = await axios.get(`${API_ENDPOINT}/ipos?$sort[startDate]=-1`,{});
  companiesCacheInFileSystem.set(id+'192', response.data);
  return response.data;

};

const getIdeas = async ({id, type = 'idea'} = {}) => {
  const ideasResponse = await ideasCacheInFileSystem.get(id + type);

  if (ideasResponse) {
    return ideasResponse;
  }
  let response = null;

  if (!id) {
    response = await axios.get(`${API_ENDPOINT}/ideas?type=${type}&$limit=100`);

  } else {
    response = await axios.get(`${API_ENDPOINT}/ideas/${id}`);
  }

  ideasCacheInFileSystem.set(id + type, response.data);
  return response.data || {};

};

const getRandomImage = ({keyword}) => {
  return axios.get(`https://source.unsplash.com/400/?${keyword}`)
};


module.exports = {
  getSectors,
  getCompanies,
  getIdeas,
  getRandomImage,
  getIpos
};

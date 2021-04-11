const cache = require('file-system-cache').default;
const axios = require("axios");

let API_ENDPOINT = null;

if (process.env.NODE_ENV === "production") {
  API_ENDPOINT = "https://979lav1fck.execute-api.us-east-1.amazonaws.com/production";
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

const getSectors = async ({id = 'all'} = {}) => {
  const sectorsResponse = await sectorsCacheInFileSystem.get(id);

  if (sectorsResponse) {
    return sectorsResponse;
  }

  const response = await axios.get(`${API_ENDPOINT}/sectors`);
  sectorsCacheInFileSystem.set(id, response.data);
  return response.data;

};

const getCompanies = async ({id = 'all'} = {}) => {
  const companiesResponse = await companiesCacheInFileSystem.get(id);

  if (companiesResponse) {
    return companiesResponse;
  }

  const response = await axios.get(`${API_ENDPOINT}/company`);
  companiesCacheInFileSystem.set(id, response.data);
  return response.data;

};


module.exports = {
  getSectors,
  getCompanies
};

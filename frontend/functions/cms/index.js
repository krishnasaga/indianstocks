const faunadb = require('faunadb');
const {Get, Ref,Collection,Select,Match,Index} = faunadb.query;

const client = new faunadb.Client({
    secret: 'fnAEeNdS-TAAweTcm1mXhS_YM5Ndb3yvHGGTtyXz',
    domain: 'db.eu.fauna.com',
    scheme: 'https',
  })

const   handler = async (event) => {
    const { path } = event;
    const result = await client.query(
        Select( "data", 
        Get(
         Match(
          Index("pages_by_its_path"), 
          path.split('/cms/')[1]
         )
        )
       )
    );

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    }
};

module.exports = {
    handler
};

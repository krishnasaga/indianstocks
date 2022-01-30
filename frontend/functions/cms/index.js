const faunadb = require('faunadb');
const {Get, Ref,Collection} = faunadb.query;

const client = new faunadb.Client({
    secret: 'fnAEeNdS-TAAweTcm1mXhS_YM5Ndb3yvHGGTtyXz',
    domain: 'db.eu.fauna.com',
    scheme: 'https',
  })

const   handler = async () => {

    const result = await client.query(
        Get(
            Ref(
                Collection('pages'),
                '322036800773161153'
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


const faunadb = require('faunadb');
const {Get, Ref,Ref} = faunadb.query;

const client = new faunadb.Client({
    secret: 'fnAEeNUaTOAAwpzVzt_Bpvi01MB9M7N3bm-5Rb0u',
    domain: 'db.fauna.com',
    scheme: 'https',
  })

module.exports = {
    handler: async () => {

        const result = await client.query(
            Get(
                Ref(
                    Ref('pages'),
                    '322036800773161153'
                )
            )
        );

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        }
    }
};

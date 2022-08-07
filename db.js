const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'gvjtvdzutekfwv',
    host: 'ec2-107-22-122-106.compute-1.amazonaws.com',
    database: 'd2e7lu3rqsqma0',
    password: '91aeb8a6090443b7f86c01e912fb808f30a0633d6698408e93a3e8afc68831d6',
    port: 5432
});

module.exports = pool;
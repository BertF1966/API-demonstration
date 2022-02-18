const db = require('../db/connection');

const fetchUsers = () => {
// (console.log('in model'))

    return db
    .query(`SELECT * FROM users;`)
    .then(({rows}) => {
        return rows;
    })
}

module.exports = fetchUsers;
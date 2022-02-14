const db = require('../db/connection');

const fetchTopics = () => {
    console.log('in model.js')
    return db
    .query(`SELECT * FROM topics;`)
    .then((result) => {
        // console.log(result);
        return result;
    })
}

module.exports = fetchTopics;
const db = require('../db/connection');

const fetchArticles = (articleId) => {
    console.log('in model')
    return db
    .query(`SELECT * FROM articles WHERE article_id = $1;`, [articleId])
    .then(({rows}) => {
        console.log(rows[0])
        return rows[0];
    })
}

module.exports = fetchArticles;


const db = require('../db/connection');

exports.fetchCommentCount = (articleId) => {
    return db 
    .query(`SELECT * from articles WHERE article_Id = $1;`, [articleId])
    .then(({rows}) => {
        if (rows.length === 0) {
            return Promise.reject({status: 400, msg: 'Article not found'});
        }
        return rows[0];
    })
}




const db = require("../db/connection");

exports.updateArticles = (articleId, inc_votes) => {
    return db
    .query(`UPDATE articles SET votes = votes + $1 
    WHERE article_id = $2 RETURNING *;`, [inc_votes, articleId ])
    .then((result) => {
        console.log(result.rows)
        return result.rows[0]
    })
}


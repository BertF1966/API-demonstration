const db = require("../db/connection");

exports.updateArticles = (articleId, inc_votes) => {
  return db
    .query(
      `UPDATE articles SET votes = votes + $1 
    WHERE article_id = $2 RETURNING *;`,
      [inc_votes, articleId]
    )
    .then((result) => {
      if (result.rows.length === 0) {
        return Promise.reject({ status: 404, msg: "Article not found" });
      }
      return result.rows[0];
    });
};

const { rows } = require("pg/lib/defaults");
const db = require("../db/connection");

exports.updateArticles = (articleId, inc_votes) => {
  return db
    .query(
      `UPDATE articles SET votes = votes + $1 
    WHERE article_id = $2 RETURNING *;`,
      [inc_votes, articleId]
    )
    .then((result) => {
      if (rows.length === 0) {
        return Promise.reject({ status: err.status, msg: msg.status });
      }
      console.log(result.rows);
      return result.rows[0];
    });
};

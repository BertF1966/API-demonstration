const db = require("../db/connection");

exports.fetchArticles = (sortBy) => {
  return db
    .query(`SELECT articles.*, COUNT(comments.article_id) AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id GROUP BY articles.article_id ORDER BY articles.article_id DESC;`)
    .then(({ rows }) => {
      console.log(rows)
      return rows;
    });
};
const db = require("../db/connection");

exports.fetchArticles = (sortBy = 'created_at', order = 'asc', filter) => {
  // console.log(sortBy, order, filter)
  return db
    .query(`SELECT articles.*, COUNT(comments.article_id) AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id GROUP BY articles.article_id ORDER BY ${sortBy} ${order};`)
    .then(({ rows }) => {
      if (!['article_id', 'title', 'topic', 'author', 'body', 'created_at', 'votes', 'comment_count' ].includes(sortBy)) {
        return Promise.reject({status: 400, msg: 'Invalid query'})
      }
      if (!['asc', 'desc'].includes(order)) {
        return Promise.reject({status: 400, msg: 'Invalid query'})
      }
      return rows;
    });
};
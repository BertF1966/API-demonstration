const db = require("../db/connection");

exports.fetchComments = (commentId) => {

  return db
  .query(`DELETE FROM comments WHERE comments.comment_id = $1;`, [commentId])
  .then((res) => {
  
    });
};

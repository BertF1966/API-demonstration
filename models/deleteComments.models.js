const db = require("../db/connection");

exports.fetchComments = (commentId) => {
    return db
    .query(`DELETE FROM comments WHERE comment_id = $1;`, [commentId])
    .then(() => {
       
      return 
    });
};

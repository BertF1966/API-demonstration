const res = require("express/lib/response");
const db = require("../db/connection");

exports.fetchComments = (commentId) => {
    return db
    .query(`DELETE FROM comments WHERE comment_id = $1;`, [commentId])
    .then(() => {
      console.log(`DELETE FROM comments WHERE comment_id = $1;`, [commentId])
      return res.status(204).send({msg: 'no content'})
    });
};

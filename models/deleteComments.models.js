const db = require("../db/connection");

exports.fetchComments = (commentId) => {
  // console.log('in model')
  return db
  .query(`DELETE FROM comments WHERE comments.comment_id = $1 RETURNING *;`, [commentId])
  .then((rows) => {
      console.log(rows)
     return res.status(204).send({msg: 'no content'});
    });
};

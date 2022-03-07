const { fetchComments } = require("../models/deleteComments.models");

exports.deleteComments = (req, res, next) => {
    const {comment_id: commentId} = req.params;
  fetchComments(commentId)
    .then(() => {
      // console.log(msg)
     res.sendStatus(204)  
    })
    .catch((err) => {
      next(err);
  })
};

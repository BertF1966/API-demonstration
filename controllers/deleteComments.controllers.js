const { fetchComments } = require("../models/deleteComments.models");

exports.deleteComments = (req, res, next) => {
    const {comment_id: commentId} = req.params;
    console.log(commentId)
  fetchComments(commentId)
    .then(({msg}) => {
        console.log(msg)
    .catch((err) => {
      next(err);
    });
  })
};

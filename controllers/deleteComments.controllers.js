const { fetchComments } = require("../models/deleteComments.models");

exports.deleteComments = (req, res, next) => {
    const {comment_id: commentId} = req.params;
  fetchComments(commentId)
    .then(({msg}) => {
      // console.log(msg)
      return msg
      
    .catch((err) => {
      next(err);
    });
  })
};

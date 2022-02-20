const { fetchComments } = require("../models/deleteComments.models");

exports.deleteComments = (req, res, next) => {
    const {comment_id: commentId} = req.params;
    console.log(commentId)
  fetchComments(commentId)
    .then(() => {
        res.status(204).send({msg: 'no content'})
    })
    .catch((err) => {
      next(err);
    });
};

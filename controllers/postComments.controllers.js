const { addComments } = require("../models/postComments.models");

exports.postComments = (req, res, next) => {
    console.log(req)
  const { article_id: articleId } = req.params;
  const { author = 'author', body = 'body'} = req.body;
  addComments(articleId, author, body)
    .then((comments) => {
        // console.log(comments)
      res.status(201).send({ comments });
    })
    .catch((err) => {
      next(err);
    });
};

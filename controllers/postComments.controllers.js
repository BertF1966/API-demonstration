const { addComments } = require("../models/postComments.models");

exports.postComments = (req, res, next) => {
  const { article_id } = req.params;
  const { username, body} = req.body;
  addComments(body, username, article_id)
    .then((comments) => {
      res.status(201).send({ comments });
    })
    .catch((err) => {
      next(err);
    });
};

const { fetchArticles } = require("../models/articles.models.js");

exports.getArticles = (req, res, next) => {
  const { article_id: articleId } = req.params;
  fetchArticles(articleId)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch((err) => {
      next(err);
    });
};

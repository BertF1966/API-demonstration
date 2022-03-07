const { fetchArticles } = require("../models/articles.models.js");

exports.getArticles = (req, res, next) => {
  const {sort_by: sortBy, order, topic} = req.query; 
  fetchArticles(sortBy, order, topic)
    .then((articles) => {
      // console.log(articles)
      res.status(200).send({ articles });
    })
    .catch((err) => {
      next(err);
    });
};

const { fetchArticles } = require("../models/articles.models.js");

exports.getArticles = (req, res, next) => {
  console.log(req.sort_by)
  const {sort_by: sortBy, order, topic} = req.query; 
  fetchArticles(sortBy, order, topic)
    .then((articles) => {
      res.status(200).send({ articles });
    })
    .catch((err) => {
      next(err);
    });
};

const { fetchArticles } = require("../models/articles.models.js");

exports.getArticles = (req, res, next) => {
  const {sort_by: sortBy, order, filter} = req.query; 
  // console.log(req.query)
  fetchArticles(sortBy, order, filter)
    .then((articles) => {
      res.status(200).send({ articles });
    })
    .catch((err) => {
      next(err);
    });
};

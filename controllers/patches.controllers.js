const {updateArticles} = require('../models/patches.models')

exports.patchArticles = (req, res, next) => {
  const { article_id: articleId } = req.params;
  const {inc_votes} = req.body;
  updateArticles(articleId, inc_votes)
  .then((article) => {
    res.status(200).send({article})
  })
  .catch((err) => {
    next(err)
  })
}


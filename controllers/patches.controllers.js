const {fetchPatches} = require('../models/patches.models')

exports.postPatches = (req, res, next) => {
  const { article_id: articleId } = req.params;
  fetchPatches()
  .then(() => {
    res.status(201).send()
  })
  .catch((err) => {
    next(err)
  })
}


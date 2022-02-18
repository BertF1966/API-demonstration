const {fetchCommentCount} = require('../models/commentCount.models')

exports.getCommentCount = (req, res, next) => {
    const { article_id: articleId} = req.params;
    fetchCommentCount(articleId)
    .then((article) => {
        res.status(200).send({article});
    
    })
    .catch((err) => {
        next(err);
    })
}


const {fetchComments} = require('../models/comments.models')

exports.getComments = (req, res, next) => {
    fetchComments()
    .then(() => {

    })
    .catch((err) => {
        next(err);
    })
}
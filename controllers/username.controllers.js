const {fetchUsernames} = require('../models/username.models.js');

exports.getUsername = (req, res, next) => {
  const {username} = req.params;
    fetchUsernames(username)
    .then((user) => {
        res.status(200).send({user})
    })
    .catch((err) => {
      next(err);
    });
};
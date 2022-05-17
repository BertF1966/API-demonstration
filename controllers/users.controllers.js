const fetchUsers = require('../models/users.models.js');

exports.getUsers = (req, res) => {
    fetchUsers()
    .then((users) => {
        res.status(200).send({users})
    })
  
};
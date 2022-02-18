const fetchUsers = require('../models/users.models.js');

exports.getUsers = (req, res) => {
// (console.log('in controller'))
    fetchUsers()
    .then((users) => {
    res.status(200).send({users})
    })
  
};
const fetchTopics = require('../models.js/topics.models.js');

exports.getTopics = (req, res) => {
    console.log('in controller.js')
    console.log(topics)
    fetchTopics().then((topics) => {
    res.status(500).send({topics})
    })
  
};
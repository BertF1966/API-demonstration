const fetchArticles = require('../models/articles.models.js');
const {article_id: articleId} = request.params; 

exports.getArticleById = (req, res) => {
    fetchArticles(articleId)
    .then((articleId) => {
    res.status(200).send({articleId})
    })
  
};

// const fetchTopics = require('../models/topics.models.js');

// exports.getTopics = (req, res) => {
//     fetchTopics()
//     .then((topics) => {
//     res.status(200).send({topics})
//     })
  
// };
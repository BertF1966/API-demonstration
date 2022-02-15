const fetchArticles = require('../models/articles.models.js');

exports.getArticles = (req, res) => {
    // console.log('in controller')
    const {article_id: articleId} = req.params;
    fetchArticles(articleId)
    .then((article) => {
            res.status(200).send({article})
    })
  
};

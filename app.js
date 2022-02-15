const express = require('express');
const {getTopics, getArticleById} = require('./controllers/topics.controllers')
const app  = express();

app.get('/api/topics', getTopics);

app.get('/api/articles/:article_id', getArticleById);

app.all('/api/*', (req, res) => {
    res.status(404).send({msg: 'Path not found'});
});

app.use(express.json());



module.exports = app;
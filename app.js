const express = require('express');
const {getTopics} = require('./controllers/topics.controllers');
const {getArticles} = require('./controllers/articles.controllers')

const app  = express();

app.get('/api/topics', getTopics);

app.get('/api/articles/:article_id', getArticles);
console.log('in app')
app.all('/api/*', (req, res) => {
    res.status(404).send({msg: 'Path not found'});
});

app.use(express.json());



module.exports = app;
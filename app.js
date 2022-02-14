const express = require('express');
const {getTopics} = require('/home/bertf1966/northcoders2/projects/be-nc-news/controllers.js/topics.controllers.js')
const app  = express();

app.get('/api/topics', getTopics);

console.log('in app.js')

app.all('/api/*', (req, res) => {
    res.status(404).send({msg: 'Path not found'});
});

app.use(express.json());



module.exports = app;
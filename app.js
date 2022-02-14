const express = require('express');
const res = require('express/lib/response');
const app  = express();

app.get('/api/topics', (req, res) => {
    
})



app.all('/api/*', (req, res) => {
    res.status(404).send({msg: 'Path not found'});
})

module.exports = app;
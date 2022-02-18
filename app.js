const express = require("express");
const { getTopics } = require("./controllers/topics.controllers");
const { getArticleById } = require("./controllers/articleId.controllers");
const { getArticles } = require("./controllers/articles.controllers");
const { patchArticles } = require("./controllers/patches.controllers");
const { getUsers } = require("./controllers/users.controllers");
const { getComments} = require('./controllers/comments.controllers');



const { handlePsqlErrors, handleCustomErrors } = require("./errors");
const app = express();

app.use(express.json());

app.get("/api/topics", getTopics);

app.get("/api/users", getUsers);

app.get("/api/articles", getArticles);

app.get("/api/articles/:article_id", getArticleById);

app.get('/api/articles/:article_id/comments', getComments)

app.patch('/api/articles/:article_id', patchArticles);


app.all("/api/*", (req, res) => {
  res.status(404).send({ msg: "Path not found" });
});

app.use(handlePsqlErrors);

app.use(handleCustomErrors);

module.exports = app;

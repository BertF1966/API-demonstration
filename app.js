const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());

const { getApi } = require("./controllers/getApi.controllers");
const { getTopics } = require("./controllers/topics.controllers");
const { getArticleById } = require("./controllers/articleId.controllers");
const { getArticles } = require("./controllers/articles.controllers");
const { patchArticles } = require("./controllers/patches.controllers");
const { getUsers } = require("./controllers/users.controllers");
const { getComments } = require("./controllers/comments.controllers");
const { postComments } = require("./controllers/postComments.controllers");
const { deleteComments } = require("./controllers/deleteComments.controllers");


const { handlePsqlErrors, handleCustomErrors, handlePsqlTableErrors } = require("./errors");


app.use(express.json());

app.get('/api', getApi);

app.get("/api/topics", getTopics);

app.get("/api/users", getUsers);

app.get("/api/articles", getArticles);

app.get("/api/articles/:article_id", getArticleById);

app.get("/api/articles/:article_id/comments", getComments);

app.patch("/api/articles/:article_id", patchArticles);

app.post("/api/articles/:article_id/comments", postComments);

app.delete("/api/comments/:comment_id", deleteComments);

app.all("/api/*", (req, res) => {
  res.status(404).send({ msg: "Path not found" });
});

app.use(handlePsqlErrors);

app.use(handleCustomErrors);

app.use(handlePsqlTableErrors)

module.exports = app;

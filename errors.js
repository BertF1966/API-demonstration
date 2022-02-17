const { rows } = require("pg/lib/defaults");

exports.handlePsqlErrors = (err, req, res, next) => {
  if (err.code === "22P02") {
    res.status(400).send({ msg: "bad request" });
  } else {
    next(err);
  }
};

exports.handleCustomErrors = (err, req, res, next) => {
  if (err) {
    res.status(404).send({ msg: "Article not found" });
  }
};


exports.handlePsqlErrors = (err, req, res, next) => {
  // console.log(err)
  if (err.code === "22P02" || err.code === "23502") {
    res.status(400).send({ msg: "bad request" });
  } else {
    next(err);
  }
};

exports.handleCustomErrors = (err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
};

exports.handlePsqlTableErrors = (err, req, res, next) => {
  if (err.code === '23503') {
    res.status(404).send({ msg: 'Article not found' });
  } else {
    next(err);
  }
};
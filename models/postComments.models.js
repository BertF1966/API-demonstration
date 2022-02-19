const { db } = require("../db/connection");

exports.addComments = (articleId, author, body) => {

    return db
    .query(
        `INSERT INTO comments (articleId, author, body) 
        VALUES 
        ($1, $2, $3) RETURNING *;`,
        [articleId, author, body]
        )
        .then(({rows}) => {
            if (rows.length === 0) {
                return Promise.reject({ status: 404, msg: "Article not found" });
            }
            // console.log(rows);
            return rows;
        });
    };



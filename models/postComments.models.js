const  db  = require("../db/connection");

exports.addComments = (body, username, article_id,) => {
    console.log('in model')
    return db
    .query(
        `INSERT INTO comments (body, author, article_id) 
        VALUES ($1, $2, $3) RETURNING *;`,
        [body, username, article_id,]
        )
        .then(({rows}) => {
            if (rows.length === 0) {
                return Promise.reject({ status: 404, msg: "Article not found" });
            }
            console.log(rows);
            return rows[0];
        });

    };



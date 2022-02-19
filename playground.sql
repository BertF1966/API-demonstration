\c nc_news_test


SELECT articles.author, articles.body, articles.article_id, articles.created_at, articles.votes FROM articles 

LEFT JOIN comments ON articles.article_id = comments.article_id 

WHERE articles.article_id = $1 GROUP BY articles.article_id;, [article_id];
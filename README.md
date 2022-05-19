# Northcoders News API

Welcome to my back end API.  Here is a link to the hosted version - https://bertf-nc-news.herokuapp.com/

This API has been built for the purpose of accessing application data programmatically. The intention here is to mimic the building of a real world backend service (such as reddit) which should provide this information to the front end architecture.

The database is PSQL, and the API interacts with it using node-postgres.

Hosting locally
In order to host locally, node version 17.8.0 and Postgres 12.10 are required. Choose the folder you wish to host from, then in your terminal, type the following: -

git clone https://github.com/BertF1966/API-demonstration.git

You will need to cd into this folder, run the command `psql -f ./db/setup.sql` to run the table setup file. Then run `node ./db/seeds/run-seed.js` to seed the data tables.

Then type the command `heroku open`. A browser will now open with the API ready to receive URL endpath commands. Add `/API` to the URL then e.g. `/users` to display data table information.



To connect to both development and test databases, please add the files `.env.development` and `.env.test` to the root directory with the addresses `PGDATABASE=nc_news` and `PGDATABASE=nc_news_test` respectively.


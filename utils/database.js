// const mongoose = require("mongoose");
// const keys = require("../config/keys");

// const MongoClient = require('mongodb');
// const nextConnect = require('next-connect');

// const client = new MongoClient(keys.mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function database(req, res, next) {
//   if (!client.isConnected()) await client.connect()
//   req.dbClient = client;
//   req.db = client.db('MockApp');
//   console.log('Connect 2.0');
//   return next();
// }

// const middleware = nextConnect();

// middleware.use(database);

// module.exports = middleware;
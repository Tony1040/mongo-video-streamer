"use strict";

const { MongoClient } = require('mongodb');
console.log(process.env.MONGODB_URI);
const client = new MongoClient(process.env.MONGODB_URL,
  { useNewUrlParser: true,  useUnifiedTopology: true });
  
module.exports = client.connect();
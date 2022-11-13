"use strict";

const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URL,
  { useNewUrlParser: true,  useUnifiedTopology: true });
  
module.exports = client.connect();
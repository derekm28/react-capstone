"use strict";

/** Database setup for capstone2. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

// if (process.env.NODE_ENV === "test") {
//   DB_URI = "postgresql:///users_test";
// } else {
//   DB_URI = "postgresql:///users";
// }

const db = new Client({
  connectionString: DB_URI()
});

db.connect();

module.exports = db;

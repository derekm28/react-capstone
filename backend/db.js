"use strict";

/** Database setup for jobly. */

const { Client } = require("pg");
const { getDatabaseUri } = require("./config");
const DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///users_test";
} else {
  DB_URI = "postgresql:///users";
}

const db = new Client({
  connectionString: getDatabaseUri(),
});

db.connect();

module.exports = db;

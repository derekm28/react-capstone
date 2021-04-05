"use strict";

/** Express app for Capstone2. */

const express = require("express");
const cors = require("cors");

const { NotFoundError } = require("./expressError");

const { authenticateJWT } = require("./authMiddleware");
const authRoutes = require("./auth");
const usersRoutes = require("./userRoute");
const sneakerRoutes = require("./sneaker");

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(authenticateJWT);

//a prefix for all related routes
//auth/register or users/username
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/sneaker", sneakerRoutes);


/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3001, function () {
  console.log("Started on 3001");
});


module.exports = app;

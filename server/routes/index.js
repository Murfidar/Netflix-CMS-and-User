"use strict";

const express = require("express");
const router = express.Router();

const auth = require("./auth");
const user = require("./user");
const client = require("./client");
const movie = require("./movie");
const genre = require("./genre");
const cast = require("./cast");
const authenticate = require("../middlewares/authenticate.middleware");
const errorHandler = require("../middlewares/error.middleware");

router.use("/client", client);

router.use("/", auth);
router.use(authenticate);
router.use("/users", user);
router.use("/movies", movie);
router.use("/genres", genre);
router.use("/casts", cast);
router.use(errorHandler);

module.exports = router;

"use strict";

const express = require("express");
const Controller = require("../controller/cast.controller");
const router = express.Router();

// cuisine
router.get("/:movieId", Controller.getCastByMovieId);

module.exports = router;

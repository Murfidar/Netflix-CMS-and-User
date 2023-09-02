"use strict";

const { Cast } = require("../models");
class Controller {
  static async getCastByMovieId(req, res, next) {
    try {
      let { movieId } = req.params;
      let data = await Cast.findAll({ where: { movieId } });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;

"use strict";

const { Movie, User, Genre, Cast, sequelize } = require("../models");

class Controller {
  static async movie(req, res, next) {
    try {
      let data = await Movie.findAll({
        include: [
          { model: Genre, attributes: ["id", "name"] },
          {
            model: User,
            attributes: ["id", "username"],
          },
        ],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async movieById(req, res, next) {
    try {
      let data = await Movie.findByPk(req.params.id, {
        include: [
          { model: Genre, attributes: ["id", "name"] },
          {
            model: User,
            attributes: ["id", "username"],
          },
        ],
      });
      if (!data) throw { name: "NotFound" };
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async createMovie(req, res, next) {
    const t = await sequelize.transaction();
    try {
      let {
        title,
        synopsis,
        trailerUrl,
        imgUrl,
        rating,
        authorId,
        genreId,
        cast,
      } = req.body;
      let movie = await Movie.create(
        {
          title,
          synopsis,
          trailerUrl,
          imgUrl,
          rating,
          authorId,
          genreId,
        },
        { transaction: t }
      );

      cast.forEach((el) => {
        el.movieId = movie.id;
      });
      let castList = await Cast.bulkCreate( cast , { transaction: t });


      await t.commit();

      res.status(201).json({ movie, castList });
    } catch (error) {
      console.log(error);
      next(error);
      await t.rollback();
    }
  }

  static async deleteMovie(req, res, next) {
    try {
      let movie = await Movie.findByPk(req.params.id);

      if (!movie) throw { name: "NotFound" };

      await Movie.destroy({ where: { id: req.params.id } });
      await Cast.destroy({ where: { movieId: req.params.id } });
      res.status(200).json({ message: "Movie success to delete" });
    } catch (error) {
      next(error);
    }
  }

  static async editMovie(req, res, next) {
    try {
      let {
        title,
        synopsis,
        trailerUrl,
        imgUrl,
        rating,
        authorId,
        genreId,
        cast,
      } = req.body;
      let movie = await Movie.findByPk(req.params.id);
      movie = await movie.update({
        title,
        synopsis,
        trailerUrl,
        imgUrl,
        rating,
        authorId,
        genreId,
      });

      let castList = await Cast.bulkUpdate({ cast });

      res.status(200).json({ movie, castList });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;

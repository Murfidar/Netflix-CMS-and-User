"use strict";

const { generateAccessToken } = require("../helpers/jwt");
const { User } = require("../models");

class Controller {
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;

      let user = await User.create(
        { username, email, password, phoneNumber, address },
        "Users"
      );

      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { key, password } = req.body;
      let user;
      if (key.includes("@")) {
        user = await User.findOne({
          where: { email: key },
        });
      } else {
        user = await User.findOne({
          where: { username: key },
        });
      }

      if (!user) throw { name: "NotFoundLoginDetais" };

      const isVerified = user.verifyPassword(password);

      if (!isVerified) throw { name: "Invalid Password" };

      const access_token = generateAccessToken(user);

      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;

"use strict";

const { verifyAccessToken } = require("../helpers/jwt");

module.exports = (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) throw { name: "NoToken" };

    const payload = verifyAccessToken(access_token);
    req.user = payload;

    next();
  } catch (error) {
    next(error);
  }
};

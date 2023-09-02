"use strict";

var jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function generateAccessToken(user) {
  const { id, username, email } = user;
  return jwt.sign(
    {
      id,
      username,
      email,
    },
    JWT_SECRET,
    { expiresIn: "2h" }
  );
}

function verifyAccessToken(access_token) {
  return jwt.verify(access_token, JWT_SECRET);
}

module.exports = { generateAccessToken, verifyAccessToken };

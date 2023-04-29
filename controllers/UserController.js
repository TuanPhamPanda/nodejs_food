import { login, insertUser, updateToken } from "../models/UserModel.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const ShowUser = (req, res, next) => {
  const data = req.body;

  const query = JSON.stringify(data)
    .replaceAll(':"', "='")
    .replaceAll('"=', " = ")
    .replaceAll('","', "' AND ")
    .replaceAll('{"', "")
    .replaceAll('"}', "'");

  login(query, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results)
      /*
      const dataEncrypt = {
        user_id: results.user_id,
        user_email: results.user_email,
        user_name: results.user_name
      };

      const accessToken = jwt.sign(
        dataEncrypt,
        process.env.ACCESS_SECRET_TOKEN,
        {
          expiresIn: process.env.TIME_EXITS_ACCESS_TOKEN,
        }
      );
      const refreshToken = jwt.sign(data, process.env.REFRESH_SECRET_TOKEN, {
        expiresIn: process.env.TIME_EXITS_REFRESH_TOKEN,
      });
      updateToken(refreshToken, query, (err, result) => {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json({ accessToken, refreshToken });
        }
      });
      */
    }
  });
};

// create user
export const createAccount = (req, res) => {
  const data = req.body;

  insertUser(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

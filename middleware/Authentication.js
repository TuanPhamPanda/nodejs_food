import jwt from "jsonwebtoken";
import { checkTokenInDatabase, updateToken } from "../models/UserModel.js";
import { format } from "../controllers/formatQuery.js";

export const refreshToken = (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) res.sendStatus(401);
  checkTokenInDatabase(refreshToken, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log(results);
      if (!results) {
        res.sendStatus(403);
      } else {
        jwt.verify(
          refreshToken,
          process.env.REFRESH_SECRET_TOKEN,
          (err, data) => {
            if (err) res.sendStatus(403);
            const accessToken = jwt.sign(
              {
                user_email: data.user_email,
                user_password: data.user_password,
              },
              process.env.ACCESS_SECRET_TOKEN,
              {
                expiresIn: TIME_EXITS_ACCESS_TOKEN,
              }
            );
            res.json({ accessToken });
          }
        );
      }
    }
  });
};
//Chuaw lam
export const logout = (req, res) => {  

  updateToken(
    '',
    `user_id = ${req.body.user_id}`
    ,(err, results) => {
      if (err) {
        res.send(err);
      } else {
        if (results.changedRows > 0) {
          res.sendStatus(200);
        }
      }
    });
};

export const authenToken = (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  console.log(authorizationHeader);
  const token = authorizationHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, data) => {
    if (err) return res.sendStatus(403);
    else {
      next();
    }
  });
};

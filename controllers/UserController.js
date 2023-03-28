import { login, insertUser } from "../models/UserModel.js";
import { encrypted } from "./Encypt.js";

export const ShowUser = (req, res) => {
  const data = req.body;
  const pass = data.user_password;

  data.user_password = encrypted(pass);

  const query = JSON.stringify(data)
    .replaceAll(':"', "='").replaceAll('"=', " = ")
    .replaceAll('","', "' AND ")
    .replaceAll('{"', "").replaceAll('"}', "'")
    console.log(query);
    login(query,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// create user
export const createAccount = (req, res) => {
  const data = req.body;
  const pass = data.user_password;
  data.user_password = encrypted(pass);

  insertUser(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
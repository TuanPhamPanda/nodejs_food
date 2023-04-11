import db from "../config/database.js";

// get single user
export const login = (data, result) => {
  db.query(`SELECT * FROM user WHERE ${data}`, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
        result(null, results[0])
    }
  });
};

export const checkTokenInDatabase = (token, result) => {
  db.query(
    `SELECT token FROM user WHERE token = '${token}'`,
    (err, results) => {
      if (err) {
        result(err, null);
      } else {
        if(results.length > 0){
            result(null, true);
        }else{
            result(null, false);
        }
      }
    }
  );
};

export const updateToken = (token, data, result) => {
  db.query(`UPDATE user SET token = '${token}' WHERE ${data}`, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// insert User
export const insertUser = (data, result) => {
  db.query("INSERT INTO user SET ?", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

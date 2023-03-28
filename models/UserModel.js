import db from "../config/database.js";

// get single user
export const login = (data,result) => {
    db.query(`SELECT * FROM user WHERE ${data}`, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results);
            result(null,results[0]);
        }
    });
};

// insert User
export const insertUser = (data,result) => {
    db.query("INSERT INTO user SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};
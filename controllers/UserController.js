import {
    getAllUser,
    login,
    insertUser
} from "../models/UserModel.js";

// get all Users
export const allUsers=(req,res)=>{
    getAllUser((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// get single user
export const showAUser = (req,res) => {
    const query = JSON.stringify(req.body)
    .replaceAll(':"', "='").replaceAll('"=', " = ")
    .replaceAll('","', "' AND ")
    .replaceAll('{"', "").replaceAll('"}', "'")

    login(query,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// create user
export const createAccount=(req,res)=>{
    const data = req.body;
    insertUser(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};




